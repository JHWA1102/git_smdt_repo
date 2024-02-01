package com.project.smdt;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

import java.util.Arrays;
import java.util.List;

@RestController
@Slf4j
public class HelloController {
    @GetMapping("/api/hello")
    public List<String> hello(){
    	
    	log.info("hello");
    	
        return Arrays.asList("나의앱", "MYAPP");
    }
}


