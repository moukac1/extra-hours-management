package net.back.backend_proj.mapper;

import net.back.backend_proj.dto.EarningsDto;
import net.back.backend_proj.entity.Earnings;

public class EarningsMapper {
    public static Earnings maptoEarnings(EarningsDto earningsDto) {
        return new Earnings(
                earningsDto.getId(),
                earningsDto.getIdDonneur(),
                earningsDto.getMontant(),
                earningsDto.getDate(),
                earningsDto.getNote()

        ) ;
    }
    public static EarningsDto maptoEarningsDto(Earnings earnings) {
        return new EarningsDto(
                earnings.getId(),
                earnings.getIdDonneur(),
                earnings.getMontant(),
                earnings.getDate(),
                earnings.getNote()

        );
    }
}
