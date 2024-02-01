package com.project.smdt.users.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class UsersController {
	@CrossOrigin
	@PostMapping("/users/signup")
	public List<String> signup() {
		
		log.info("signup");
		
		return Arrays.asList("signup", "MYAPP");
	}

}
