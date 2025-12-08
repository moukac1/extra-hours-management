package net.back.backend_proj.entity;
import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name="employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "full_name")
    private String fullName;
    @Column(name = "level" )
    private String level;
    @Column(name="note" )
    private String note;
    @Column(name="status")
    private String status;
    @Column(name="duration")
    private String duration;



    public Employee(Long id , String fullName , String level, String note, String status , String duration) {
        this.id = id;
        this.fullName = fullName;
        this.level = level;
        this.note = note;
        this.status = status;
        this.duration = duration;
    }
   public Employee(){

   }



    public Long getId() {return this.id;}
    public void setId(Long id) { this.id = id;}
    public String getFullName() {return this.fullName;}
    public void setFullName(String fullName) { this.fullName = fullName;}
    public String getLevel() {return this.level;}
    public void setLevel(String level) {this.level = level;}
    public String getNote() {return this.note;}
    public void setNote(String note) {this.note = note;}
    public String getStatus() {return this.status;}
    public void setStatus(String status) {this.status = status;}
    public String getDuration() {return this.duration;}
    public void setDuration(String duration) {this.duration = duration;}
}
