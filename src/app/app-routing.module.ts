import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExampleComponent } from "./example/example.component";
import { TdformComponent } from "./tdform/tdform.component";
import { ReactiveComponent } from "./reactive/reactive.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/example', pathMatch: 'full'},
    {path: 'example', component: ExampleComponent},
    {path: 'td', component: TdformComponent},
    {path: 'reactive', component: ReactiveComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
    exports: [RouterModule]
})

export class AppRoutingModule {

}