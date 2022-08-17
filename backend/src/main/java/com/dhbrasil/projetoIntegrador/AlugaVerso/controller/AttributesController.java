package com.dhbrasil.projetoIntegrador.AlugaVerso.controller;


import com.dhbrasil.projetoIntegrador.AlugaVerso.dto.AttributesDTO;
import com.dhbrasil.projetoIntegrador.AlugaVerso.dto.MetaverseDTO;
import com.dhbrasil.projetoIntegrador.AlugaVerso.service.AttributesService;
import com.dhbrasil.projetoIntegrador.AlugaVerso.service.MetaverseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/attributes")
public class AttributesController {

    @Autowired
    private AttributesService attributesService;


    //Listar todas os atributos
    @GetMapping
   public ResponseEntity<List<AttributesDTO>> listAttributes(){
       List<AttributesDTO> list = attributesService.findAll();
       return ResponseEntity.ok().body(list);
   }


}
