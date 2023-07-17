package com.peercoreProject.fullstack_backend.entity;
import javax.persistence.*;
@Entity
@Table(name="mt_customer")
public class CustomerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String email;

    @ManyToOne
    @JoinColumn(name = "group_id")
    private GroupEntity group;

    public CustomerEntity(Long id, String name, String email, GroupEntity group) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.group = group;
    }

    public CustomerEntity() {

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public GroupEntity getGroup() {
        return group;
    }

    public void setGroup(GroupEntity group) {
        this.group = group;
    }
}
