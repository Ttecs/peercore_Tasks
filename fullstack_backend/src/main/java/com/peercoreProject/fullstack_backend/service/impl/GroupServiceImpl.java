package com.peercoreProject.fullstack_backend.service.impl;

import com.peercoreProject.fullstack_backend.entity.CustomerEntity;
import com.peercoreProject.fullstack_backend.entity.GroupEntity;
import com.peercoreProject.fullstack_backend.repository.GroupRepository;
import com.peercoreProject.fullstack_backend.service.GroupService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class GroupServiceImpl implements GroupService {
    private final GroupRepository groupRepository;

    public GroupServiceImpl(GroupRepository groupRepository) {
        this.groupRepository = groupRepository;
    }

   @Override
    public List<GroupEntity> findAllGroups() {
        return groupRepository.findAll();
    }

    @Override
    public Optional<GroupEntity> findById(Long id) {
        return groupRepository.findById(id);
    }

    @Override
    public GroupEntity saveGroup(GroupEntity groupEntity) {
        return groupRepository.save(groupEntity);
    }

    @Override
    public GroupEntity updateGroup(GroupEntity  groupEntity) {
        return groupRepository.save(groupEntity);
    }

    @Override
    public void deleteGroup(Long id) {
        groupRepository.deleteById(id);
    }
}
