import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponentComponent } from './login-component/login-component.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponentComponent
    }
];