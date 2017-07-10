package com.example.demo;

import com.fasterxml.jackson.databind.DeserializationFeature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootApplication
@RestController
public class DemoApplication {

	@Autowired
	EmployeeRepository employeeRepository;

	@RequestMapping(value = "/employee", method = RequestMethod.GET)
	ResponseEntity<List<Employee>> findAllEmployees() {
		List<Employee> employees = employeeRepository.findAll();
		if (employees.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}
		HttpHeaders responseHeaders = new HttpHeaders();
		//responseHeaders.set("Connection", "keep-alive");
		//responseHeaders.set("Accept-Ranges", "bytes");
		responseHeaders.set("Access-Control-Allow-Origin", "*");
		//responseHeaders.set("Cache-Control", "max-age=600");
		responseHeaders.set("Vary", "Accept-Encoding");
		return new ResponseEntity<List<Employee>>(employees, responseHeaders, HttpStatus.OK);
	}
	@RequestMapping(value = "/employee/update", method = RequestMethod.POST)
	void updateEmployee(@RequestBody String payload) throws IOException {
		ObjectMapper mapper = new ObjectMapper();
		mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		Employee employee = mapper.readValue(payload, Employee.class);
		System.out.println(employee);
		employeeRepository.save(employee);
	}
	@RequestMapping(value = "/employee/delete", method = RequestMethod.POST)
	void deleteEmployee(@RequestBody String payload) {
		System.out.println(payload);
		System.out.println(Long.parseLong(payload));
		employeeRepository.delete(Long.parseLong(payload));
	}


	@Autowired
	ContractRepository contractRepository;

	@RequestMapping(value = "/contract", method = RequestMethod.GET)
	ResponseEntity<List<Contract>> findAllContracts() {
		List<Contract> contracts = contractRepository.findAll();
		if (contracts.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}
		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.set("Access-Control-Allow-Origin", "*");
		responseHeaders.set("Vary", "Accept-Encoding");
		return new ResponseEntity<List<Contract>>(contracts, responseHeaders, HttpStatus.OK);
	}
	@RequestMapping(value = "/contract/update", method = RequestMethod.POST)
	void updateContract(@RequestBody String payload) throws IOException {
		ObjectMapper mapper = new ObjectMapper();
		mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		Contract contract = mapper.readValue(payload, Contract.class);
		System.out.println(contract);
		contractRepository.save(contract);
	}
	@RequestMapping(value = "/contract/delete", method = RequestMethod.POST)
	void deleteContract(@RequestBody String payload) {
		System.out.println(payload);
		System.out.println(Long.parseLong(payload));
		contractRepository.delete(Long.parseLong(payload));
	}

	@Autowired
	LocationRepository locationRepository;

	@RequestMapping(value = "/location", method = RequestMethod.GET)
	ResponseEntity<List<Location>> findAllLocations() {
		List<Location> locations = locationRepository.findAll();
		if (locations.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}
		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.set("Access-Control-Allow-Origin", "*");
		responseHeaders.set("Vary", "Accept-Encoding");
		return new ResponseEntity<List<Location>>(locations, responseHeaders, HttpStatus.OK);
	}
	@RequestMapping(value = "/location/update", method = RequestMethod.POST)
	void updateLocation(@RequestBody String payload) throws IOException {
		ObjectMapper mapper = new ObjectMapper();
		mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		Location location = mapper.readValue(payload, Location.class);
		System.out.println(location);
		locationRepository.save(location);
	}
	@RequestMapping(value = "/location/delete", method = RequestMethod.POST)
	void deleteLocation(@RequestBody String payload) {
		System.out.println(payload);
		System.out.println(Long.parseLong(payload));
		locationRepository.delete(Long.parseLong(payload));
	}

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
}
