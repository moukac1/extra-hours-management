package net.back.backend_proj.entity;

import jakarta.persistence.*;

@Entity
@Table(name="schedule")
public class Schedule {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "lundi")
    private String lundi;
    @Column(name = "mardi" )
    private String mardi;
    @Column(name="mercredi" )
    private String mercredi;
    @Column(name="jeudi")
    private String jeudi;
    @Column(name="vendredi")
    private String vendredi;
    @Column(name="samedi")
    private String samedi;
    @Column(name="dimanche")
    private String dimanche;

    public Schedule() {
    }

    public Schedule(Long id, String lundi, String mardi, String mercredi, String jeudi, String vendredi, String samedi, String dimanche) {
        this.id = id;
        this.lundi = lundi;
        this.mardi = mardi;
        this.mercredi = mercredi;
        this.jeudi = jeudi;
        this.vendredi = vendredi;
        this.samedi = samedi;
        this.dimanche = dimanche;
    }

    public Long getId() {
        return id;
    }

    public String getLundi() {
        return lundi;
    }

    public String getMardi() {
        return mardi;
    }

    public String getMercredi() {
        return mercredi;
    }

    public String getJeudi() {
        return jeudi;
    }

    public String getVendredi() {
        return vendredi;
    }

    public String getSamedi() {
        return samedi;
    }

    public String getDimanche() {
        return dimanche;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setLundi(String lundi) {
        this.lundi = lundi;
    }

    public void setMardi(String mardi) {
        this.mardi = mardi;
    }

    public void setMercredi(String mercredi) {
        this.mercredi = mercredi;
    }

    public void setJeudi(String jeudi) {
        this.jeudi = jeudi;
    }

    public void setVendredi(String vendredi) {
        this.vendredi = vendredi;
    }

    public void setSamedi(String samedi) {
        this.samedi = samedi;
    }

    public void setDimanche(String dimanche) {
        this.dimanche = dimanche;
    }
}
