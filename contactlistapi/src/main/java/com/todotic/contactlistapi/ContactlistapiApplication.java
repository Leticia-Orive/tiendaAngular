package com.todotic.contactlistapi;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import com.todotic.contactlistapi.entity.Contact;
import com.todotic.contactlistapi.repository.ContactRepository;

@SpringBootApplication
public class ContactlistapiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ContactlistapiApplication.class, args);
	}
@Bean
	CommandLineRunner runner(ContactRepository contactRepository){
		return new CommandLineRunner() {
			@Override
			public void run(String... args) throws Exception{
				List<Contact> contacts = Arrays.asList(
			new Contact(name:"Carlos", email:"carlos@gmail.com", LocalDateTime.now()),
			new Contact(name:"Juan", email:"juan@gmail.com", LocalDateTime.now()),
			new Contact(name:"Marcelo", email:"marcelo@gmail.com", LocalDateTime.now()),
			new Contact(name:"Lucia", email:"lucia@gmail.com", LocalDateTime.now()),
			new Contact(name:"Maria", email:"maria@gmail.com", LocalDateTime.now())

		);
		contactRepository.saveAll(contacts);
		

			}
		};
		
	}

}
