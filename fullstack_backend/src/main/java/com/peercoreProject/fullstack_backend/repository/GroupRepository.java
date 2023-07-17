package com.peercoreProject.fullstack_backend.repository;

import com.peercoreProject.fullstack_backend.entity.GroupEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface GroupRepository extends JpaRepository<GroupEntity, Long> {
}