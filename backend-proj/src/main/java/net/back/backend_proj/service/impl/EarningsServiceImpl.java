package net.back.backend_proj.service.impl;

import net.back.backend_proj.dto.EarningsDto;
import net.back.backend_proj.entity.Earnings;
import net.back.backend_proj.exception.ResourceNotFoundException;
import net.back.backend_proj.mapper.EarningsMapper;
import net.back.backend_proj.repository.EarningsRepository;
import net.back.backend_proj.service.EarningsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EarningsServiceImpl implements EarningsService {
    @Autowired
    private EarningsRepository earningsRepository;

    @Override
    public List<EarningsDto> getEarnings(){
        List<Earnings> earnings = earningsRepository.findAll();
        return earnings.stream().map((earning)-> EarningsMapper.maptoEarningsDto(earning)).collect(Collectors.toList());

    }

    @Override
    public EarningsDto addEarning(EarningsDto earningsDto )  {

        Earnings earning = EarningsMapper.maptoEarnings(earningsDto);
        Earnings savedEarning = earningsRepository.save(earning);
        return EarningsMapper.maptoEarningsDto(savedEarning);




    }

    @Override
    public String deleteEarning(Long id) {
        Earnings earnings = earningsRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("employee doesn't exist with id : "+ id ));
        EarningsDto earningsDto = EarningsMapper.maptoEarningsDto(earnings) ;
        earningsRepository.deleteById(id);

        return "success" ;
    }

}
