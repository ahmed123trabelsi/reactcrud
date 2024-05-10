
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  


  return (
    <>
  <nav>
  <NavLink to="/">home</NavLink>
  <br />
  <NavLink to="/profile/ahmed">profile</NavLink>
  </nav>
  </>
  );
} 