package com.peercoreProject.fullstack_backend.controller;

import com.peercoreProject.fullstack_backend.entity.CustomerEntity;
import com.peercoreProject.fullstack_backend.entity.GroupEntity;
import com.peercoreProject.fullstack_backend.service.GroupService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/group")
public class GroupController {

    private final GroupService groupService;

    public GroupController(GroupService groupService) {
        this.groupService = groupService;
    }
    @CrossOrigin(origins = "http://localhost:3000/")
    @GetMapping
    public List<GroupEntity> findAllGroups(){
        return  groupService.findAllGroups();
    }
    @GetMapping("/{id}")
    public Optional<GroupEntity> findGroupById(@PathVariable("id") Long id){
        return groupService.findById(id);
    }
    @CrossOrigin(origins = "http://localhost:3000/")
    @PostMapping
    public GroupEntity saveGroup(@RequestBody GroupEntity groupEntity){
        return groupService.saveGroup(groupEntity);
    }
    @PutMapping
    public GroupEntity updateGroup(@RequestBody GroupEntity groupEntity){
        return groupService.updateGroup(groupEntity);
    }

    @DeleteMapping ("/{id}")
    public void deleteGroup(@PathVariable("id") Long id){
        groupService.deleteGroup(id);
    }

}
