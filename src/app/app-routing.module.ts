import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { HardcodeComponent } from './hardcode/hardcode.component';
import { TruncationComponent } from './truncation/truncation.component';
import { CorruptionComponent } from './corruption/corruption.component';
import { DatetimeComponent } from './datetime/datetime.component';
import { OverlappingComponent } from './overlapping/overlapping.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hardcode', component: HardcodeComponent },
  { path: 'truncation', component: TruncationComponent },
  { path: 'corruption', component: CorruptionComponent },
  { path: 'datetime', component: DatetimeComponent },
  { path: 'overlapping', component: OverlappingComponent },
  { path: 'support', component: SupportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
