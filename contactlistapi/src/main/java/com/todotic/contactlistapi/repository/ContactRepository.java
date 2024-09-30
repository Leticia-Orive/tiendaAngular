package com.todotic.contactlistapi.repository;

import org.springframework.data.repository.CrudRepository;

import com.todotic.contactlistapi.entity.Contact;

public interface ContactRepository extends CrudRepository<Contact, Integer> {

}
