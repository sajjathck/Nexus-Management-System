import React from 'react';
import { Link, Outlet, Route, Routes } from "react-router-dom";
import studentmodules from './Studentmodules';
import Card from '../Shared/Card';

export default function ProfilePage() {
  return (
    <div>
     {studentmodules.map((module) => (
                  <Link key={module.name} to={`/${module.link}`}>
                  
                    <Card
                      link={module.link}
                      name={module.name}
                    />
                  </Link>
                ))}
    </div>
  )
}
