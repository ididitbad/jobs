package com.example.demo;

import javax.persistence.*;

/**
 * Created by KirK on 09.07.2017.
 */
@Entity
@Table(name = "CONTRACTS")
public class Contract {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "CONTRACT_ID")
    private Long id;
    @Column(name = "CONTRACT_NAME")
    private String name;
    @Column(name = "SQUARE_METER_PRICE")
    private Long price;

    protected Contract() {}

    public Contract(String name, Long price) {
        this.name = name;
        this.price = price;
    }

    @Override
    public String toString() {
        return "Contract{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price='" + price + '\'' +
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

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }
}
