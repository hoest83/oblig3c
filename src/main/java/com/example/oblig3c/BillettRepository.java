package com.example.oblig3b;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Repository
public interface BillettRepository extends JpaRepository<Billett,Long> {

//    @Query("from Billett order by Etternavn asc")
//   List<Billett> orderByEtternavn();
// public List<Billett> findBillettByEtternavn(String Etternavn);

// public List<Billett> OrderByEtternavn();
//
//    public List<Billett> findDistinctByEtternavn(String Etternavn);
//
//    public List<Billett> findAllByOrderByValue(String Etternavn);
}

