package com.peercoreProject.fullstack_backend.service;



import com.peercoreProject.fullstack_backend.entity.GroupEntity;

import java.util.List;
import java.util.Optional;


public interface GroupService {
    List<GroupEntity> findAllGroups();
    Optional<GroupEntity> findById(Long id);
    GroupEntity saveGroup(GroupEntity groupEntity);
    GroupEntity updateGroup(GroupEntity groupEntity);
    void deleteGroup(Long id);

}