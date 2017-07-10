package com.example.demo;

import javax.persistence.*;

/**
 * Created by KirK on 09.07.2017.
 */

@Entity
@Table(name = "LOCATIONS")
public class Location {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "LOCATION_ID")
    private Long id;
    @Column(name = "LOCATION_NAME")
    private String name;
    @Column(name = "SQUARE")
    private Long square;
    @Column(name = "CONTRACT_ID")
    private Long contract;

    protected  Location() {}

    public Location(String name, Long square, Long contract) {
        this.name = name;
        this.square = square;
        this.contract = contract;
    }

    @Override
    public String toString() {
        return "Location{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", square=" + square +
                ", contract=" + contract +
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

    public Long getSquare() {
        return square;
    }

    public void setSquare(Long square) {
        this.square = square;
    }

    public Long getContract() {
        return contract;
    }

    public void setContract(Long contract) {
        this.contract = contract;
    }
}
