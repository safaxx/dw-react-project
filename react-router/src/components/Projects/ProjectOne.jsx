import React from 'react'
import { useParams } from 'react-router-dom';

function ProjectOne() {
    const params = useParams();
  return (
    <div>ProjectOne: {params.projectId}</div>
  )
}

export default ProjectOne