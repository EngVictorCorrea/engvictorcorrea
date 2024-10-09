import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'resume',
        loadChildren: () =>
            import('./features/resume/resume.module').then((m) => m.ResumeModule),
    },
    {
        path: '**', redirectTo: 'resume', pathMatch: 'full'
    },
];
