package com.todotic.contactlistapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todotic.contactlistapi.entity.Contact;
import com.todotic.contactlistapi.repository.ContactRepository;

@RequestMapping("/api/contacts")
@RestController

public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @GetMapping()
    Iterable<Contact> list(){
        return contactRepository.findAll();
    }
}
