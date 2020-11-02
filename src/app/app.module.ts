import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MyWebComponent } from './my-web-component/my-web-component.component';
import { createCustomElement } from '@angular/elements';
@NgModule({
declarations: [
AppComponent,
MyWebComponent
],
imports: [
BrowserModule,
HttpClientModule,
],
providers: [],
bootstrap: [],
entryComponents: [MyWebComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }
  ngDoBootstrap() {
    const webComponent = createCustomElement(MyWebComponent, { injector: this.injector });
    customElements.define('my-web-component', webComponent);
}
}
