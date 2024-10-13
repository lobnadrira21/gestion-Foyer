import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import tn.esprit.tpfoyer.entity.Universite;
import tn.esprit.tpfoyer.repository.UniversiteRepository;
import tn.esprit.tpfoyer.service.UniversiteServiceImpl;
import static org.mockito.Mockito.*;


import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@SpringBootTest(classes = UniversiteServiceImplTest.class)
public class UniversiteServiceImplTest {

    @Mock
    private UniversiteRepository universiteRepository;

    @InjectMocks
    private UniversiteServiceImpl universiteService;

    private Universite universite1;
    private Universite universite2;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        universite1 = new Universite();
        universite1.setIdUniversite(1L);
        universite1.setNomUniversite("Université de Tunis");
        universite2 = new Universite();
        universite2.setIdUniversite(2L);
        universite2.setNomUniversite("Université de Sfax");
    }


    @Test
    public void testAjouterUniversite() {
        // Given
        Universite universite = new Universite();
        universite.setNomUniversite("Université de Tunis");

        when(universiteRepository.save(any(Universite.class))).thenReturn(universite);

        // When
        Universite savedUniversite = universiteService.addUniversite(universite);

        // Then
        assertNotNull(savedUniversite);
        assertEquals("Université de Tunis", savedUniversite.getNomUniversite());
        verify(universiteRepository, times(1)).save(universite);
    }

    @Test
    public void testTrouverUniversiteParId() {
        // Given
        Universite universite = new Universite();
        universite.setIdUniversite(1L);
        universite.setNomUniversite("Université de Sfax");

        when(universiteRepository.findById(1L)).thenReturn(Optional.of(universite));

        // When
        Universite foundUniversite = universiteService.retrieveUniversite(1L);

        // Then
        assertNotNull(foundUniversite);
        assertEquals(1L, foundUniversite.getIdUniversite());
        assertEquals("Université de Sfax", foundUniversite.getNomUniversite());
        verify(universiteRepository, times(1)).findById(1L);
    }

    @Test
    public void testGetAllUniversites() {
        // Arrange: on simule le comportement du repository
        List<Universite> universites = Arrays.asList(universite1, universite2);
        when(universiteRepository.findAll()).thenReturn(universites);

        // Act: on appelle la méthode à tester
        List<Universite> result = universiteService.retrieveAllUniversites();

        // Assert: on vérifie que le résultat est correct
        assertNotNull(result);
        assertEquals(2, result.size());
        assertEquals("Université de Tunis", result.get(0).getNomUniversite());
        assertEquals("Université de Sfax", result.get(1).getNomUniversite());

        // Vérifie que la méthode findAll a bien été appelée une fois
        verify(universiteRepository, times(1)).findAll();
    }
}

