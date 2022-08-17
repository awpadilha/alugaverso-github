package com.dhbrasil.projetoIntegrador.AlugaVerso.service.validation;

import com.dhbrasil.projetoIntegrador.AlugaVerso.controller.exceptions.FieldMessage;
import com.dhbrasil.projetoIntegrador.AlugaVerso.dto.UserInsertDTO;
import com.dhbrasil.projetoIntegrador.AlugaVerso.dto.UserUpdateDTO;
import com.dhbrasil.projetoIntegrador.AlugaVerso.model.User;
import com.dhbrasil.projetoIntegrador.AlugaVerso.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerMapping;

import javax.servlet.http.HttpServletRequest;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class UserUpdateValidator implements ConstraintValidator<UserUpdateValid, UserUpdateDTO> {

    @Autowired
    private HttpServletRequest request;
    @Autowired
    private UserRepository userRepository;
    @Override
    public void initialize(UserUpdateValid ann) {
    }

    @Override
    public boolean isValid(UserUpdateDTO dto, ConstraintValidatorContext context) {

        var uriVars = (Map<String, String>) request.getAttribute(HandlerMapping.URI_TEMPLATE_VARIABLES_ATTRIBUTE);
        long userId = Integer.parseInt(uriVars.get("id"));


        List<FieldMessage> list = new ArrayList<>();


        User user = userRepository.findByEmail(dto.getEmail());
        if(user != null && userId != user.getId() ){
            list.add(new FieldMessage("email", "Email já existe"));
        }

        for (FieldMessage e : list) {
            context.disableDefaultConstraintViolation();
            context.buildConstraintViolationWithTemplate(e.getMessage()).addPropertyNode(e.getFieldName())
                    .addConstraintViolation();
        }
        return list.isEmpty();
    }
}
