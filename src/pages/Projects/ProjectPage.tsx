import React from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row, Wrap, Title, Header1, Description } from '../../components/atomic'
import { imageFolderPath, projects } from './ProjectData.json'

export default function ProjectPage() {
  const { id } = useParams()
  return <Col padding="13.75px"></Col>
}
