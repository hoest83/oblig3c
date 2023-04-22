package com.example.oblig3b;

import jakarta.persistence.OrderBy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Sort;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@RestController
public class BillettController {

    @Autowired
    BillettRepository billettRepository;



    @GetMapping("/lagre")
    public String lagreBillett(Billett innBillett){
        billettRepository.save(innBillett);   /// INSERT INTO student VALUES (? ? ? ?
        return "Success - Student added";
    }

    @GetMapping("/hentAlleBilletter")
    public List<Billett> hentAlleBilletter(){
        List<Billett> studentList = billettRepository.findAll();

        return studentList;
    }

    @GetMapping("/slettAlle")
    public String slettAlle(){
        billettRepository.deleteAll();
        return "Billetter slettet";
    }

//    @GetMapping("/slettAlle")
//    public String findBillettByEtternavn(){
//        billettRepository.findBillettByEtternavn("terje");
//        return "Billetter slettet" +billettRepository.findBillettByEtternavn("terje");
//    }

//    @GetMapping("/hentAlleBilletter")
//    public List<Billett> hentAlleBilletter(){
//        List<Billett> studentList = billettRepository.();
//
//        return studentList;
//    }

}


