package com.example.demo;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "EMPLOYEES")
public class Employee {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name = "EMPLOYEE_ID")
    private Long id;
    @Column(name = "EMPLOYEE_NAME")
    private String name;
    @Column(name = "EMPLOYEE_SURNAME")
    private String surname;
    @Column(name = "BIRTH_DATE")
    @JsonFormat(pattern="dd-MM-yyyy")
    private Date birth;
    @Column(name = "CITY_ID")
    private Integer city;
    @Column(name = "PHONE_NUM")
    private String phone;
    @Column(name = "EMPLOYEE_ACTIVE")
    private Integer active;
    @Column(name = "GROUP_ID")
    private Integer group;

    protected Employee() {}

    public Employee(String name, String surname, Date birth, Integer city, String phone, Integer active, Integer group) {
        this.name = name;
        this.surname = surname;
        this.birth = birth;
        this.city = city;
        this.phone = phone;
        this.active = active;
        this.group = group;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", birth=" + birth +
                ", city=" + city +
                ", phone='" + phone + '\'' +
                ", active=" + active +
                ", group=" + group +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public Date getBirth() {
        return birth;
    }

    public void setBirth(Date birth) {
        this.birth = birth;
    }

    public Integer getCity() {
        return city;
    }

    public void setCity(Integer city) {
        this.city = city;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Integer getActive() {
        return active;
    }

    public void setActive(Integer active) {
        this.active = active;
    }

    public Integer getGroup() {
        return group;
    }

    public void setGroup(Integer group) {
        this.group = group;
    }
}