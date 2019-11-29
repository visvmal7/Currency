import { Component } from '@angular/core';
import { Category, VdlIconRegistry } from 'vdl-angular';
import { IconListService } from './icon.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IconListService]
})
export class AppComponent {
  public icons: Array<string>;
  // public sideBarTranslation;

  constructor(
    iconListService: IconListService, 
    vdlIconRegistry: VdlIconRegistry, 
    private _sanitizer: DomSanitizer,
    private _router: Router,
    private translate: TranslateService) {
      this.icons = iconListService.getIconList();
      vdlIconRegistry.addSvgIcon(
        'ux-veritas',
        _sanitizer.bypassSecurityTrustResourceUrl('/assets/images/simple-globe.svg')
      );
      translate.setDefaultLang('en-US');
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.translate.get(['side-nav-bar']).subscribe(trans => {
      this.categories[0].displayName = trans['side-nav-bar'].homeMenu;
      this.categories[1].displayName = trans['side-nav-bar'].defectTypesMenu;
      this.categories[1].subCategories[0].displayName = trans['side-nav-bar'].hardcodeMenu;
      this.categories[1].subCategories[1].displayName = trans['side-nav-bar'].truncationMenu;
      this.categories[1].subCategories[2].displayName = trans['side-nav-bar'].corruptionMenu;
      this.categories[1].subCategories[3].displayName = trans['side-nav-bar'].dateTimeMenu;
      this.categories[1].subCategories[4].displayName = trans['side-nav-bar'].overlapMenu;
      this.categories[2].displayName = trans['side-nav-bar'].supportMenu;
    });
  }

  public categories: Category[] = [
    { displayName: 'Home', route: 'home', icon: 'fa-home' },
    {
      displayName: 'Defect Types', icon: 'fa-bug', expanded: true,
      subCategories: [
        { displayName: 'Hardcoding', route: 'hardcode', icon: 'fa-file-code-o' },
        { displayName: 'Truncation', route: 'truncation', icon: 'fa-expand' },
        { displayName: 'Corruption', route: 'corruption', icon: 'fa-language' },
        { displayName: 'Date/Time', route: 'datetime', icon: 'fa-calendar' },
        { displayName: 'Overlapping', route: 'overlapping', icon: 'fa-exchange' },
      ]
    },
    { displayName: 'Support', route: 'support', icon: 'fa-question' },
  ];

  public onCategorySelect(category: Category) {
    this._router.navigate([category.route]);
  }
}
