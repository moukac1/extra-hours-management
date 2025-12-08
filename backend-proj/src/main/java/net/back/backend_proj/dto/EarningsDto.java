package net.back.backend_proj.dto;


import jakarta.persistence.Lob;

public class EarningsDto {
    private Long id;
    private String IdDonneur;
    private String montant;
    private String date;
    private String note ;


    public EarningsDto() {}



    public EarningsDto(Long id, String IdDonneur, String montant, String date, String note) {
        this.id = id;
        this.IdDonneur = IdDonneur;
        this.montant = montant;
        this.date = date;
        this.note = note;

    }

    public Long getId() {
        return id;
    }

    public String getIdDonneur() {
        return IdDonneur;
    }

    public String getMontant() {
        return montant;
    }

    public String getDate() {
        return date;
    }
    public String getNote() {
        return note;
    }



    public void setId(Long id) {
        this.id = id;
    }

    public void setIdDonneur(String idDonneur) {
        IdDonneur = idDonneur;
    }

    public void setMontant(String montant) {
        this.montant = montant;
    }

    public void setDate(String date) {
        this.date = date;
    }
    public void setNote(String note) {
        this.note = note;
    }
}
