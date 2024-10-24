import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.esprit.tpfoyer.entity.Chambre;
import tn.esprit.tpfoyer.repository.ChambreRepository;
import tn.esprit.tpfoyer.service.ChambreServiceImpl;
import java.util.Arrays;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ChambreServiceImplTest {

    @Mock
    private ChambreRepository chambreRepository;

    @InjectMocks
    private ChambreServiceImpl chambreService;

    @Test
    public void testRetrieveAllChambres() {
        // Arrange
        Chambre chambre1 = new Chambre();
        Chambre chambre2 = new Chambre();
        List<Chambre> chambres = Arrays.asList(chambre1 , chambre2);
        when(chambreRepository.findAll()).thenReturn(chambres);

        // Act
        List<Chambre> result = chambreService.retrieveAllChambres();

        // Assert
        assertEquals(2, result.size());
        verify(chambreRepository, times(1)).findAll();
    }



    @Test
    public void testAddChambre() {
        // Arrange
        Chambre chambre = new Chambre();
        when(chambreRepository.save(chambre)).thenReturn(chambre);

        // Act
        Chambre result = chambreService.addChambre(chambre);

        // Assert
        assertNotNull(result);
        verify(chambreRepository, times(1)).save(chambre);
    }




}
