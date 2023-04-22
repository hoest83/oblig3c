package com.example.oblig3b;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Billett")
public class Billett {
    @Id
    @GeneratedValue
    private Integer id;
    private String fornavn;
    private String etternavn;
    private String telefonnummer;
    private String epost;
    private String antall;
    private String filmer;


    public Billett(Integer id, String name, Integer age) {
        this.id = id;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefonnummer = telefonnummer;
        this.epost = epost;
        this.antall = antall;
        this.filmer = filmer;
    }

    @Override
    public String toString() {
        return "Bilett{" +
                "id=" + id +
                ", fornavn='" + fornavn + etternavn +'\'' +
                ", telefonnummer=" + telefonnummer +
                ", epost=" + epost +
                ", antall=" + antall +
                ", filmer=" + filmer +
                '}';
    }
}
