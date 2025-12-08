package net.back.backend_proj.service;

import net.back.backend_proj.dto.EarningsDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface EarningsService {
    List<EarningsDto> getEarnings() ;

    EarningsDto addEarning(EarningsDto earningsDto);

    String deleteEarning(Long id);

    //EarningsDto updateEarning(Long id, EarningsDto newEarningsDto);
}
