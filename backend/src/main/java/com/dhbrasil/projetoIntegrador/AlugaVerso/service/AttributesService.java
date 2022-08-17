package com.dhbrasil.projetoIntegrador.AlugaVerso.service;

import com.dhbrasil.projetoIntegrador.AlugaVerso.dto.AttributesDTO;
import com.dhbrasil.projetoIntegrador.AlugaVerso.model.Attributes;
import com.dhbrasil.projetoIntegrador.AlugaVerso.repository.AttributesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AttributesService {

    @Autowired
    private AttributesRepository attributesRepository;

    //Listar todas os atributos
    @Transactional(readOnly = true)
    public List<AttributesDTO> findAll(){
        List<Attributes> list = attributesRepository.findAll();
        return list.stream().map(x -> new AttributesDTO(x)).collect(Collectors.toList());
    }
}
