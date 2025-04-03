package com.example.atlast;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com/example/atlast/model")
public class AtlastApplication {
    public static void main(String[] args) {
        SpringApplication.run(AtlastApplication.class, args);
        System.out.println("Hello World");
    }
}
