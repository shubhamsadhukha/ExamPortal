webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/allusers/allusers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/allusers/allusers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-header\" data-background-color=\"red\">\r\n                                <h4 class=\"title\">All Users</h4>\r\n                                <p class=\"category\">List of all Administrators and Applicants</p>\r\n                            </div>\r\n                            <div class=\"card-content table-responsive\">\r\n                                <table class=\"table\">\r\n                                    <thead class=\"text-danger\">\r\n                                        <tr>\r\n                                            <th>First Name</th>\r\n                                            <th>Last Name</th>\r\n                                            <th>Email</th>\r\n                                            <th>User Type</th>\r\n                                            <th>Options</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let user of userData\">\r\n                                            <td>{{user.first_name}}</td>\r\n                                            <td>{{user.last_name}}</td>\r\n                                            <td>{{user.email}}</td>\r\n                                            <td class=\"text-danger\">{{user.role}}</td>\r\n                                            <td><a style=\"padding:10px;\" [routerLink]=\"['/exams']\" ><i class=\"material-icons\">mode_edit</i>EDIT</a><button [routerLink]=\"['/exams']\" class=\"btn btn-primary\">SCHEDULE</button></td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n        \r\n                            </div>\r\n                        </div>\r\n                    </div> \r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/allusers/allusers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllUsersComponent = (function () {
    function AllUsersComponent(userservice) {
        this.userservice = userservice;
        this.userData = [];
        this.errorMessage = '';
    }
    AllUsersComponent.prototype.ngOnInit = function () {
        this.getUserData();
    };
    AllUsersComponent.prototype.getUserData = function () {
        var _this = this;
        this.userservice.getAllUsers()
            .map(function (response) { return response; })
            .subscribe(function (allusers) { return _this.userData = allusers; }, function (error) { return _this.errorMessage = error; });
    };
    AllUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-allusers',
            template: __webpack_require__("../../../../../src/app/allusers/allusers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/allusers/allusers.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
    ], AllUsersComponent);
    return AllUsersComponent;
    var _a;
}());

//# sourceMappingURL=allusers.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='red' data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(../assets/img/sidebar-4.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMaps('maps')\">\n            <app-footer></app-footer>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__ = __webpack_require__("../../../../perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.material.init();
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            _this.navbar.sidebarClose();
            if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* NavigationStart */]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* NavigationEnd */]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* NavigationEnd */]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__["a" /* default */](elemMainPanel);
            ps = new __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__["a" /* default */](elemSidebar);
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AppComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__["a" /* default */](elemMainPanel);
            ps.update();
        }
    };
    AppComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */]) === "function" && _a || Object)
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _c || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__("../../../../../src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_exam_service__ = __webpack_require__("../../../../../src/app/services/exam.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_result_service__ = __webpack_require__("../../../../../src/app/services/result.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_question_service__ = __webpack_require__("../../../../../src/app/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_questionpaper_service__ = __webpack_require__("../../../../../src/app/services/questionpaper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__table_list_table_list_component__ = __webpack_require__("../../../../../src/app/table-list/table-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__typography_typography_component__ = __webpack_require__("../../../../../src/app/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__icons_icons_component__ = __webpack_require__("../../../../../src/app/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__maps_maps_component__ = __webpack_require__("../../../../../src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__upgrade_upgrade_component__ = __webpack_require__("../../../../../src/app/upgrade/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__questions_questions_component__ = __webpack_require__("../../../../../src/app/questions/questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__exams_exams_component__ = __webpack_require__("../../../../../src/app/exams/exams.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__reports_reports_component__ = __webpack_require__("../../../../../src/app/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__subjects_subjects_component__ = __webpack_require__("../../../../../src/app/subjects/subjects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__allusers_allusers_component__ = __webpack_require__("../../../../../src/app/allusers/allusers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__questions_addquestion_addquestion_component__ = __webpack_require__("../../../../../src/app/questions/addquestion/addquestion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__subjects_addsubject_addsubject_component__ = __webpack_require__("../../../../../src/app/subjects/addsubject/addsubject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__exams_addexam_addexam_component__ = __webpack_require__("../../../../../src/app/exams/addexam/addexam.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//  IMPORT SERVICES






// END OF SERVICES
// IMPORTING COMPONENTS
















// END OF COMPONENTS
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__table_list_table_list_component__["a" /* TableListComponent */],
                __WEBPACK_IMPORTED_MODULE_17__typography_typography_component__["a" /* TypographyComponent */],
                __WEBPACK_IMPORTED_MODULE_18__icons_icons_component__["a" /* IconsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__maps_maps_component__["a" /* MapsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__notifications_notifications_component__["a" /* NotificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__upgrade_upgrade_component__["a" /* UpgradeComponent */],
                __WEBPACK_IMPORTED_MODULE_22__questions_questions_component__["a" /* QuestionsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__exams_exams_component__["a" /* ExamsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__reports_reports_component__["a" /* ReportsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__subjects_subjects_component__["a" /* SubjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__allusers_allusers_component__["a" /* AllUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_27__questions_addquestion_addquestion_component__["a" /* AddQuestionsComponent */],
                __WEBPACK_IMPORTED_MODULE_28__subjects_addsubject_addsubject_component__["a" /* AddSubjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__exams_addexam_addexam_component__["a" /* AddExamsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_book_service__["a" /* BookService */], __WEBPACK_IMPORTED_MODULE_9__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_10__services_exam_service__["a" /* ExamService */], __WEBPACK_IMPORTED_MODULE_11__services_result_service__["a" /* ResultService */], __WEBPACK_IMPORTED_MODULE_12__services_question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_13__services_questionpaper_service__["a" /* QuestionPaperService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__table_list_table_list_component__ = __webpack_require__("../../../../../src/app/table-list/table-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__typography_typography_component__ = __webpack_require__("../../../../../src/app/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__icons_icons_component__ = __webpack_require__("../../../../../src/app/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__maps_maps_component__ = __webpack_require__("../../../../../src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__upgrade_upgrade_component__ = __webpack_require__("../../../../../src/app/upgrade/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__questions_questions_component__ = __webpack_require__("../../../../../src/app/questions/questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__exams_exams_component__ = __webpack_require__("../../../../../src/app/exams/exams.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reports_reports_component__ = __webpack_require__("../../../../../src/app/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__subjects_subjects_component__ = __webpack_require__("../../../../../src/app/subjects/subjects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__allusers_allusers_component__ = __webpack_require__("../../../../../src/app/allusers/allusers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__questions_addquestion_addquestion_component__ = __webpack_require__("../../../../../src/app/questions/addquestion/addquestion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__subjects_addsubject_addsubject_component__ = __webpack_require__("../../../../../src/app/subjects/addsubject/addsubject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__exams_addexam_addexam_component__ = __webpack_require__("../../../../../src/app/exams/addexam/addexam.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'user-profile', component: __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'questions', component: __WEBPACK_IMPORTED_MODULE_12__questions_questions_component__["a" /* QuestionsComponent */] },
    { path: 'questions/add', component: __WEBPACK_IMPORTED_MODULE_17__questions_addquestion_addquestion_component__["a" /* AddQuestionsComponent */] },
    { path: 'exams', component: __WEBPACK_IMPORTED_MODULE_13__exams_exams_component__["a" /* ExamsComponent */] },
    { path: 'exams/add', component: __WEBPACK_IMPORTED_MODULE_19__exams_addexam_addexam_component__["a" /* AddExamsComponent */] },
    { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_14__reports_reports_component__["a" /* ReportsComponent */] },
    { path: 'subjects', component: __WEBPACK_IMPORTED_MODULE_15__subjects_subjects_component__["a" /* SubjectsComponent */] },
    { path: 'subjects/add', component: __WEBPACK_IMPORTED_MODULE_18__subjects_addsubject_addsubject_component__["a" /* AddSubjectsComponent */] },
    { path: 'allusers', component: __WEBPACK_IMPORTED_MODULE_16__allusers_allusers_component__["a" /* AllUsersComponent */] },
    { path: 'table-list', component: __WEBPACK_IMPORTED_MODULE_6__table_list_table_list_component__["a" /* TableListComponent */] },
    { path: 'typography', component: __WEBPACK_IMPORTED_MODULE_7__typography_typography_component__["a" /* TypographyComponent */] },
    { path: 'icons', component: __WEBPACK_IMPORTED_MODULE_8__icons_icons_component__["a" /* IconsComponent */] },
    { path: 'maps', component: __WEBPACK_IMPORTED_MODULE_9__maps_maps_component__["a" /* MapsComponent */] },
    { path: 'notifications', component: __WEBPACK_IMPORTED_MODULE_10__notifications_notifications_component__["a" /* NotificationsComponent */] },
    { path: 'upgrade', component: __WEBPACK_IMPORTED_MODULE_11__upgrade_upgrade_component__["a" /* UpgradeComponent */] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"#\">\n                        Home\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        About Exam Portal\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        About RICE\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <p class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}} <a href=\"http://riceindia.org\">RICE Education</a> Online Examination System\n        </p>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                       <i class=\"material-icons\">power_settings_new</i>\n                       <p class=\"hidden-lg hidden-md\">Logout</p>\n                    </a>\n                </li>\n            </ul>\n\n            <form class=\"navbar-form navbar-right\" role=\"search\">\n                <div class=\"form-group form-black is-empty\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                    <span class=\"material-input\"></span>\n                </div>\n                <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n                </button>\n            </form>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(location, element) {
        this.element = element;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text\">\n        <div class=\"logo-img\">\n            <img src=\"/assets/img/logo.png\"/>\n        </div>\n        EXAM PORTAL\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n    <form class=\"navbar-form navbar-right\" role=\"search\" *ngIf=\"isMobileMenu()\">\n        <div class=\"form-group form-black is-empty\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n            <span class=\"material-input\"></span>\n        </div>\n        <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n        </button>\n    </form>\n\n    <ul class=\"nav nav-mobile-menu\" *ngIf=\"isMobileMenu()\">\n        <li>\n            <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"material-icons\">dashboard</i>\n                <p class=\"hidden-lg hidden-md\">Dashboard</p>\n            </a>\n        </li>\n        <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"material-icons\">notifications</i>\n                <span class=\"notification\">5</span>\n                <p class=\"hidden-lg hidden-md\">Notifications</p>\n            </a>\n            <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Mike John responded to your email</a></li>\n                <li><a href=\"#\">You have 5 new tasks</a></li>\n                <li><a href=\"#\">You're now friend with Andrew</a></li>\n                <li><a href=\"#\">Another Notification</a></li>\n                <li><a href=\"#\">Another One</a></li>\n            </ul>\n        </li>\n        <li>\n            <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n               <i class=\"material-icons\">person</i>\n               <p class=\"hidden-lg hidden-md\">Profile</p>\n            </a>\n        </li>\n    </ul>\n\n    <div class=\"nav-container\">\n        <ul class=\"nav\">\n            <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\n                <a  [routerLink]=\"[menuItem.path]\">\n                    <i class=\"material-icons\">{{menuItem.icon}}</i>\n                    <p>{{menuItem.title}}</p>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ROUTES = [
    { path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: 'user-profile', title: 'My Profile', icon: 'person', class: '' },
    { path: 'questions', title: 'Questions', icon: 'question_answer', class: '' },
    { path: 'subjects', title: 'Subjects', icon: 'library_books', class: '' },
    { path: 'exams', title: 'Exams', icon: 'assignment', class: '' },
    { path: 'reports', title: 'See Reports', icon: 'assessment', class: '' },
    { path: 'allusers', title: 'Manage Users', icon: 'accessibility', class: '' },
];
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                    <div class=\"card card-stats\" >\n                        <div class=\"card-header\" data-background-color=\"orange\">\n                            <i class=\"material-icons\">question_answer</i>\n                        </div>\n                        <div class=\"card-content\">\n                            <p class=\"category\">Questions</p>\n                            <h5 class=\"title\">Prepare Questions</h5>\n                            <button [routerLink]=\"['/questions/add']\" class=\"btn btn-primary\">ADD</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                    <div class=\"card card-stats\" >\n                        <div class=\"card-header\" data-background-color=\"green\">\n                            <i class=\"material-icons\">assignment</i>\n                        </div>\n                        <div class=\"card-content\">\n                            <p class=\"category\">Exams</p>\n                            <h5 class=\"title\">Prepare Exams</h5>\n                            <button [routerLink]=\"['/exams/add']\" class=\"btn btn-success\">PREPARE</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                    <div class=\"card card-stats\" >\n                        <div class=\"card-header\" data-background-color=\"purple\">\n                            <i class=\"material-icons\">face</i>\n                        </div>\n                        <div class=\"card-content\">\n                            <p class=\"category\">Users</p>\n                            <h5 class=\"title\">Manage Users</h5>\n                            <button [routerLink]=\"['/allusers']\" class=\"btn btn-primary\">MANAGE</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                    <div class=\"card card-stats\" >\n                        <div class=\"card-header\" data-background-color=\"blue\">\n                            <i class=\"material-icons\">assessment</i>\n                        </div>\n                        <div class=\"card-content\">\n                            <p class=\"category\">Reports</p>\n                            <h5 class=\"title\">Manage Reports</h5>\n                            <button [routerLink]=\"['/reports']\" class=\"btn btn-info\">MANAGE</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"card\">\n                        <div class=\"card-header\" data-background-color=\"red\">\n                            <h4 class=\"title\">Information Preview</h4>\n                            <p class=\"category\">Your records at a glance</p>\n                        </div>\n                        <div class=\"card-content table-responsive\">\n                            <table class=\"table\">\n                                <thead class=\"text-danger\">\n                                    <tr>\n                                        <th>Activity</th>\n                                        <th>Today</th>\n                                        <th>This Week</th>\n                                        <th>Till Date</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>Total Exams Created</td>\n                                        <td>0</td>\n                                        <td>0</td>\n                                        <td class=\"text-danger\">0</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Total Candidates Scheduled for Exam</td>\n                                        <td>0</td>\n                                        <td>0</td>\n                                        <td class=\"text-danger\">0</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Total Candidates Given the Exam</td>\n                                        <td>0</td>\n                                        <td>0</td>\n                                        <td class=\"text-danger\">0</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Total Candidates Passed the Exam</td>\n                                        <td>0</td>\n                                        <td>0</td>\n                                        <td class=\"text-danger\">0</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n    \n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            <!--\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card\" >\n                        <div class=\"card-header card-chart\" data-background-color=\"green\">\n                            <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n                        </div>\n                        <div class=\"card-content\">\n                            <h4 class=\"title\">Daily Sales</h4>\n                            <p class=\"category\"><span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 55%  </span> increase in today sales.</p>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"stats\">\n                                <i class=\"material-icons\">access_time</i> updated 4 minutes ago\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card\" >\n                        <div class=\"card-header card-chart\" data-background-color=\"orange\">\n                            <div class=\"ct-chart\" id=\"emailsSubscriptionChart\"></div>\n                        </div>\n                        <div class=\"card-content\">\n                            <h4 class=\"title\">Email Subscriptions</h4>\n                            <p class=\"category\">Last Campaign Performance</p>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"stats\">\n                                <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"card\" >\n                        <div class=\"card-header card-chart\" data-background-color=\"red\">\n                            <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\n                        </div>\n                        <div class=\"card-content\">\n                            <h4 class=\"title\">Completed Tasks</h4>\n                            <p class=\"category\">Last Campaign Performance</p>\n                        </div>\n                        <div class=\"card-footer\">\n                            <div class=\"stats\">\n                                <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-md-12\">\n                    <div class=\"card card-nav-tabs\" >\n                        <div class=\"card-header\" data-background-color=\"purple\">\n                            <div class=\"nav-tabs-navigation\">\n                                <div class=\"nav-tabs-wrapper\">\n                                    <span class=\"nav-tabs-title\">Tasks:</span>\n                                    <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n                                        <li class=\"active\">\n                                            <a href=\"#profile\" data-toggle=\"tab\">\n                                                <i class=\"material-icons\">bug_report</i>\n                                                Bugs\n                                            <div class=\"ripple-container\"></div></a>\n                                        </li>\n                                        <li class=\"\">\n                                            <a href=\"#messages\" data-toggle=\"tab\">\n                                                <i class=\"material-icons\">code</i>\n                                                Website\n                                            <div class=\"ripple-container\"></div></a>\n                                        </li>\n                                        <li class=\"\">\n                                            <a href=\"#settings\" data-toggle=\"tab\">\n                                                <i class=\"material-icons\">cloud</i>\n                                                Server\n                                            <div class=\"ripple-container\"></div></a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"card-content\">\n                            <div class=\"tab-content\">\n                                <div class=\"tab-pane active\" id=\"profile\">\n                                    <table class=\"table\">\n                                        <tbody>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                                                </td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td>Create 4 Invisible User Experiences you Never Knew About</td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                                <div class=\"tab-pane\" id=\"messages\">\n                                    <table class=\"table\">\n                                        <tbody>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                                                </td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                                <div class=\"tab-pane\" id=\"settings\">\n                                    <table class=\"table\">\n                                        <tbody>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                                                </td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-6 col-md-12\">\n                    <div class=\"card\" >\n                        <div class=\"card-header\" data-background-color=\"orange\">\n                            <h4 class=\"title\">Employees Stats</h4>\n                            <p class=\"category\">New employees on 15th September, 2016</p>\n                        </div>\n                        <div class=\"card-content table-responsive\">\n                            <table class=\"table table-hover\">\n                                <thead class=\"text-warning\">\n                                    <tr>\n                                        <th>ID</th>\n                                        <th>Name</th>\n                                        <th>Salary</th>\n                                        <th>Country</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>1</td>\n                                        <td>Dakota Rice</td>\n                                        <td>$36,738</td>\n                                        <td>Niger</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2</td>\n                                        <td>Minerva Hooper</td>\n                                        <td>$23,789</td>\n                                        <td>Curaçao</td>\n                                    </tr>\n                                    <tr>\n                                        <td>3</td>\n                                        <td>Sage Rodriguez</td>\n                                        <td>$56,142</td>\n                                        <td>Netherlands</td>\n                                    </tr>\n                                    <tr>\n                                        <td>4</td>\n                                        <td>Philip Chaney</td>\n                                        <td>$38,735</td>\n                                        <td>Korea, South</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        -->\n        </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.startAnimationForLineChart = function (chart) {
        var seq, delays, durations;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: __WEBPACK_IMPORTED_MODULE_1_chartist__["Svg"].Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq = 0;
    };
    ;
    DashboardComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq2 = 0;
    };
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
        var dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsDailySalesChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        };
        var dailySalesChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
        this.startAnimationForLineChart(dailySalesChart);
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        var dataCompletedTasksChart = {
            labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };
        var optionsCompletedTasksChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        };
        var completedTasksChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
        // start animation for the Completed Tasks Chart - Line Chart
        this.startAnimationForLineChart(completedTasksChart);
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
        var dataEmailsSubscriptionChart = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        var optionsEmailsSubscriptionChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var emailsSubscriptionChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Bar"]('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);
        //start animation for the Emails Subscription Chart
        this.startAnimationForBarChart(emailsSubscriptionChart);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/exams/addexam/addexam.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exams/addexam/addexam.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6\">\r\n                <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Name of Question Paper</label>\r\n                    <input type=\"email\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"dropdown\">\r\n                        <a href=\"#\" class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">\r\n                            Duration\r\n                            <b class=\"caret\"></b>\r\n                        </a>\r\n                        <ul class=\"dropdown-menu\">\r\n                            <li><a href=\"#\">15 minutes</a></li>\r\n                            <li><a href=\"#\">30 minutes</a></li>\r\n                            <li><a href=\"#\">45 minutes</a></li>\r\n                            <li class=\"divider\"></li>\r\n                            <li><a href=\"#\">1 hour</a></li>\r\n                            <li><a href=\"#\">2 hours</a></li>\r\n                            <li><a href=\"#\">3 hours</a></li>\r\n                            <li class=\"divider\"></li>\r\n                        </ul>\r\n                </div>\r\n                <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Number of questions</label>\r\n                    <input type=\"email\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Marks per question</label>\r\n                    <input type=\"email\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Passing marks</label>\r\n                    <input type=\"email\" class=\"form-control\">\r\n                </div>\r\n                <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Marks per wrong answer</label>\r\n                    <input type=\"email\" class=\"form-control\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6\">\r\n                <button class=\"btn btn-warning\">Choose Questions</button>\r\n            </div>\r\n            \r\n        </div>\r\n        <div class=\"row\">\r\n            <button class=\"btn btn-success\">Save Question Paper</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/exams/addexam/addexam.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddExamsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AddExamsComponent = (function () {
    function AddExamsComponent() {
    }
    AddExamsComponent.prototype.ngOnInit = function () {
    };
    AddExamsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-addexams',
            template: __webpack_require__("../../../../../src/app/exams/addexam/addexam.component.html"),
            styles: [__webpack_require__("../../../../../src/app/exams/addexam/addexam.component.css")]
        })
    ], AddExamsComponent);
    return AddExamsComponent;
}());

//# sourceMappingURL=addexam.component.js.map

/***/ }),

/***/ "../../../../../src/app/exams/exams.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exams/exams.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-7 col-md-6 col-sm-6\">\r\n                    <div class=\"card card-stats\" >\r\n                        <div class=\"card-header\" data-background-color=\"orange\">\r\n                            <i class=\"material-icons\">assignment</i>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <p class=\"category\">Create Exam</p>\r\n                            <h5 class=\"title\">Create exam from your added subjects and questions</h5>\r\n                            <button [routerLink]=\"['/exams/add']\" class=\"btn btn-warning\">CREATE</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                            <div class=\"card\">\r\n                                <div class=\"card-header\" data-background-color=\"red\">\r\n                                    <h4 class=\"title\">All Exams</h4>\r\n                                    <p class=\"category\">List of all created exams</p>\r\n                                </div>\r\n                                <div class=\"card-content table-responsive\">\r\n                                    <table class=\"table\">\r\n                                        <thead class=\"text-danger\">\r\n                                            <tr>\r\n                                                <th>Question Paper</th>\r\n                                                <th>Duration (minutes)</th>\r\n                                                <th>Questions</th>\r\n                                                <th>Marks</th>\r\n                                                <th>Options</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr>\r\n                                                <td>Sample Exam</td>\r\n                                                <td>30</td>\r\n                                                <td>10</td>\r\n                                                <td class=\"text-danger\">100</td>\r\n                                                <td><a style=\"padding:10px;\" [routerLink]=\"['/exams']\" ><i class=\"material-icons\">mode_edit</i>EDIT</a><button [routerLink]=\"['/exams']\" class=\"btn btn-primary\">SCHEDULE</button></td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n            \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-header\" data-background-color=\"red\">\r\n                                <h4 class=\"title\">Testing</h4>\r\n                                <p class=\"category\">List of all created records</p>\r\n                            </div>\r\n                            <div class=\"card-content table-responsive\">\r\n                                <table class=\"table\">\r\n                                    <thead class=\"text-danger\">\r\n                                        <tr>\r\n                                            <th>Question Paper</th>\r\n                                            <th>Duration (minutes)</th>\r\n                                            <th>Questions</th>\r\n                                            <th>Marks</th>\r\n                                            <th>Options</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let book of bookData\">\r\n                                            <td>{{book.isbn}}</td>\r\n                                            <td>{{book.title}}</td>\r\n                                            <td>{{book.author}}</td>\r\n                                            <td class=\"text-danger\">{{book.publisher}}</td>\r\n                                            <td><a style=\"padding:10px;\" [routerLink]=\"['/exams']\" ><i class=\"material-icons\">mode_edit</i>EDIT</a><button [routerLink]=\"['/exams']\" class=\"btn btn-primary\">SCHEDULE</button></td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n        \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n        </div>            \r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/exams/exams.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExamsComponent = (function () {
    function ExamsComponent(bookservice) {
        this.bookservice = bookservice;
        this.bookData = [];
        this.errorMessage = '';
    }
    ExamsComponent.prototype.ngOnInit = function () {
        this.getBookData();
    };
    ExamsComponent.prototype.getBookData = function () {
        var _this = this;
        this.bookservice.getBooks()
            .map(function (response) { return response; })
            .subscribe(function (allbooks) { return _this.bookData = allbooks; }, function (error) { return _this.errorMessage = error; });
    };
    ExamsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-exams',
            template: __webpack_require__("../../../../../src/app/exams/exams.component.html"),
            styles: [__webpack_require__("../../../../../src/app/exams/exams.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_book_service__["a" /* BookService */]) === "function" && _a || Object])
    ], ExamsComponent);
    return ExamsComponent;
    var _a;
}());

//# sourceMappingURL=exams.component.js.map

/***/ }),

/***/ "../../../../../src/app/icons/icons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <h4 class=\"title\">Material Design Icons</h4>\n                        <p class=\"category\">Handcrafted by our friends from <a target=\"_blank\" href=\"https://design.google.com/icons/\">Google</a></p>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"iframe-container hidden-sm hidden-xs\">\n                            <iframe src=\"https://design.google.com/icons/\">\n                                <p>Your browser does not support iframes.</p>\n                            </iframe>\n                        </div>\n                        <div class=\"col-md-6 hidden-lg hidden-md text-center\">\n                            <h5>The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the  <a href=\"https://design.google.com/icons/\" target=\"_blank\">Material Icons</a></h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconsComponent = (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-icons',
            template: __webpack_require__("../../../../../src/app/icons/icons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/icons/icons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());

//# sourceMappingURL=icons.component.js.map

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapsComponent = (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: [
                { 'featureType': 'water', 'stylers': [{ 'saturation': 43 }, { 'lightness': -11 }, { 'hue': '#0088ff' }] },
                { 'featureType': 'road', 'elementType': 'geometry.fill', 'stylers': [{ 'hue': '#ff0000' },
                        { 'saturation': -100 }, { 'lightness': 99 }] },
                { 'featureType': 'road', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#808080' },
                        { 'lightness': 54 }] },
                { 'featureType': 'landscape.man_made', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ece2d9' }] },
                { 'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ccdca1' }] },
                { 'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#767676' }] },
                { 'featureType': 'road', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#ffffff' }] },
                { 'featureType': 'poi', 'stylers': [{ 'visibility': 'off' }] },
                { 'featureType': 'landscape.natural', 'elementType': 'geometry.fill', 'stylers': [{ 'visibility': 'on' },
                        { 'color': '#b8cb93' }] },
                { 'featureType': 'poi.park', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.sports_complex', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.medical', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.business', 'stylers': [{ 'visibility': 'simplified' }] }
            ]
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var Marker = new google.maps.Marker({
            position: myLatlng,
            title: 'Hello World!'
        });
        // To add the marker to the map, call setMap();
        Marker.setMap(map);
    };
    MapsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-maps',
            template: __webpack_require__("../../../../../src/app/maps/maps.component.html"),
            styles: [__webpack_require__("../../../../../src/app/maps/maps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());

//# sourceMappingURL=maps.component.js.map

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"card-header\" data-background-color=\"red\">\n                <h4 class=\"title\">Notifications</h4>\n                <p class=\"category\">Handcrafted by our friend <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a></p>\n            </div>\n            <div class=\"card-content\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h5>Notifications Style</h5>\n                        <div class=\"alert alert-info\">\n                            <span>This is a plain notification</span>\n                        </div>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span>This is a notification with close button.</span>\n                        </div>\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <i data-notify=\"icon\" class=\"material-icons\">add_alert</i>\n                            <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                        </div>\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <i data-notify=\"icon\" class=\"material-icons\">add_alert</i>\n                            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h5>Notification states</h5>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                        </div>\n                        <div class=\"alert alert-success\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                        </div>\n                        <div class=\"alert alert-warning\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                        </div>\n                        <div class=\"alert alert-danger\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                        </div>\n                        <div class=\"alert alert-primary\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\n                        </div>\n                    </div>\n                </div>\n\n                <br>\n                <br>\n\n                <div class=\"places-buttons\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-md-offset-3 text-center\">\n                            <h5>Notifications Places\n                                <p class=\"category\">Click to view notifications</p>\n                            </h5>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-8 col-md-offset-2\">\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-8 col-md-offset-2\">\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationsComponent = (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-notifications',
            template: __webpack_require__("../../../../../src/app/notifications/notifications.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());

//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ "../../../../../src/app/questions/addquestion/addquestion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/questions/addquestion/addquestion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n    <form [formGroup]=\"addQuestionForm\">    \r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-6 col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                            <label> Select Category</label>\r\n                            <select class=\"form-control\"\r\n                                    formControlName=\"category\"> \r\n                                <option *ngFor=\"let categ of categories\"\r\n                                        [value]=\"categ\">{{categ}}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n            </div>\r\n            \r\n            <div class=\"col-lg-4 col-md-6 col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                            <label> Select Question Type</label>\r\n                            <select class=\"form-control\"\r\n                                    formControlName=\"type\"> \r\n                                <option *ngFor=\"let qtype of questiontype\"\r\n                                        [value]=\"qtype\">{{qtype}}\r\n                                </option>\r\n                            </select>\r\n                    </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"form-group\">\r\n                <textarea class=\"form-control\" formControlName=\"question_content\" placeholder=\"Type your question here\" rows=\"2\"></textarea>            \r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n        <fieldset formGroupName=\"answers\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6\">    \r\n                <div class=\"form-group\">\r\n                    <textarea class=\"form-control\" formControlName=\"opt_1\" placeholder=\"Option A\" rows=\"2\"></textarea>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <textarea class=\"form-control\" formControlName=\"opt_2\" placeholder=\"Option B\" rows=\"2\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6\">\r\n                <div class=\"form-group\">\r\n                    <textarea class=\"form-control\" formControlName=\"opt_3\" placeholder=\"Option C\" rows=\"2\"></textarea>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <textarea class=\"form-control\" formControlName=\"opt_4\" placeholder=\"Option D\" rows=\"2\"></textarea>\r\n                </div>\r\n            </div>\r\n        </fieldset>\r\n\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                            <label> Select Correct Answer</label>\r\n                            <select class=\"form-control\"\r\n                                    formControlName=\"correct_answer\"> \r\n                                <option *ngFor=\"let correct of correctanswer\"\r\n                                        [value]=\"correct\">{{correct}}\r\n                                </option>\r\n                            </select>\r\n                    </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <button class=\"btn btn-success\" [disabled]=\"!addQuestionForm.valid\" (click)=\"submitForm(addQuestionForm.value)\" >Save Question</button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <button [routerLink]=\"['/questions/add']\" class=\"btn btn-success\">Add more questions</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class=\"row\">\r\n        <pre>{{addQuestionForm.value | json}}</pre>\r\n    </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/questions/addquestion/addquestion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddQuestionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_question_service__ = __webpack_require__("../../../../../src/app/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddQuestionsComponent = (function () {
    function AddQuestionsComponent(quesService, router) {
        this.quesService = quesService;
        this.router = router;
        this.questiontype = [
            'Text',
            'Image'
        ];
        this.categories = [
            'Maths',
            'Physics',
            'Chemistry',
            'Biology'
        ];
        this.correctanswer = [
            'Option 1',
            'Option 2',
            'Option 3',
            'Option 4'
        ];
    }
    AddQuestionsComponent.prototype.ngOnInit = function () {
        this.addQuestionForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            category: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            question_content: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            answers: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
                opt_1: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
                opt_2: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
                opt_3: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
                opt_4: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            }),
            correct_answer: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
        });
    };
    AddQuestionsComponent.prototype.resetForm = function () {
        this.addQuestionForm.reset();
    };
    AddQuestionsComponent.prototype.cancelForm = function () {
        this.router.navigate(['/']);
    };
    AddQuestionsComponent.prototype.submitForm = function (values) {
        if (this.addQuestionForm.valid) {
            // your code goes here
            this.quesService.addQuestion(this.addQuestionForm.value).subscribe(function (res) {
                console.log('New Question Added Successfully');
                // this.leaveArray = res;
                // this.snackbar.open('New User Added Successfully','OK',{ duration: 3000, verticalPosition: 'top', horizontalPosition: 'right' });
            }, function (error) {
                console.log('There was some error!');
                // this.snackbar.open('Sorry! There was some error','OK',{ duration: 3000, verticalPosition: 'top', horizontalPosition: 'right' })
            });
            // console.log(values);
        }
    };
    AddQuestionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-addquestion',
            template: __webpack_require__("../../../../../src/app/questions/addquestion/addquestion.component.html"),
            styles: [__webpack_require__("../../../../../src/app/questions/addquestion/addquestion.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_question_service__["a" /* QuestionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object])
    ], AddQuestionsComponent);
    return AddQuestionsComponent;
    var _a, _b;
}());

//# sourceMappingURL=addquestion.component.js.map

/***/ }),

/***/ "../../../../../src/app/questions/questions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/questions/questions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        \r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\" >\r\n                    <div class=\"card-header\" data-background-color=\"blue\">\r\n                        <i class=\"material-icons\">plus_one</i>                        \r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <p class=\"category\">Add Questions</p>\r\n                        <h5 class=\"title\">Add questions as per category or exam</h5>\r\n                        <button [routerLink]=\"['/questions/add']\" class=\"btn btn-info\">ADD</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6\">\r\n                    <div class=\"card card-stats\" >\r\n                        <div class=\"card-header\" data-background-color=\"purple\">\r\n                            <i class=\"material-icons\">mode_edit</i>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <p class=\"category\">Edit Questions</p>\r\n                            <h5 class=\"title\">Edit / Remove previously added questions</h5>\r\n                            <button class=\"btn btn-primary\">EDIT</button>\r\n                        </div>\r\n                    </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-header\" data-background-color=\"red\">\r\n                                <h4 class=\"title\">All Questions</h4>\r\n                                <p class=\"category\">All questions at a glance</p>\r\n                            </div>\r\n                            <div class=\"card-content table-responsive\">\r\n                                <table class=\"table\">\r\n                                    <thead class=\"text-danger\">\r\n                                        <tr>\r\n                                            <th>Question</th>\r\n                                            <th>Subject</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td>What is the sum of 2 + 2?</td>\r\n                                            <td>Aptitude</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>How many mugs make a jar?</td>\r\n                                            <td>English</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>How will Ram get to the mountains?</td>\r\n                                            <td>English</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>What is the relation between Ram and Seeta as per equation?</td>\r\n                                            <td>Logical Reasoning</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n        \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/questions/questions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var QuestionsComponent = (function () {
    function QuestionsComponent() {
    }
    QuestionsComponent.prototype.ngOnInit = function () {
    };
    QuestionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-questions',
            template: __webpack_require__("../../../../../src/app/questions/questions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/questions/questions.component.css")]
        })
    ], QuestionsComponent);
    return QuestionsComponent;
}());

//# sourceMappingURL=questions.component.js.map

/***/ }),

/***/ "../../../../../src/app/reports/reports.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                    <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"card\" >\r\n                                    <div class=\"card-header card-chart\" data-background-color=\"green\">\r\n                                        <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\r\n                                    </div>\r\n                                    <div class=\"card-content\">\r\n                                        <h4 class=\"title\">Improvement Graph</h4>\r\n                                        <p class=\"category\"><span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 55%  </span> improvement since last month.</p>\r\n                                    </div>\r\n                                    <div class=\"card-footer\">\r\n                                        <div class=\"stats\">\r\n                                            <i class=\"material-icons\">access_time</i> updated 4 minutes ago\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n            \r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"card\" >\r\n                                    <div class=\"card-header card-chart\" data-background-color=\"orange\">\r\n                                        <div class=\"ct-chart\" id=\"emailsSubscriptionChart\"></div>\r\n                                    </div>\r\n                                    <div class=\"card-content\">\r\n                                        <h4 class=\"title\">New User Registrations</h4>\r\n                                    </div>\r\n                                    <div class=\"card-footer\">\r\n                                        <div class=\"stats\">\r\n                                            <i class=\"material-icons\">access_time</i> updated 2 minutes ago\r\n                                        </div>\r\n                                    </div>\r\n            \r\n                                </div>\r\n                            </div>\r\n            \r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"card\" >\r\n                                    <div class=\"card-header card-chart\" data-background-color=\"red\">\r\n                                        <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\r\n                                    </div>\r\n                                    <div class=\"card-content\">\r\n                                        <h4 class=\"title\">Prepared Exams</h4>\r\n                                    </div>\r\n                                    <div class=\"card-footer\">\r\n                                        <div class=\"stats\">\r\n                                            <i class=\"material-icons\">access_time</i> updated 2 minutes ago\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>               \r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportsComponent = (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.startAnimationForLineChart = function (chart) {
        var seq, delays, durations;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: __WEBPACK_IMPORTED_MODULE_1_chartist__["Svg"].Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq = 0;
    };
    ;
    ReportsComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq2 = 0;
    };
    ;
    ReportsComponent.prototype.ngOnInit = function () {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
        var dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsDailySalesChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        };
        var dailySalesChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
        this.startAnimationForLineChart(dailySalesChart);
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        var dataCompletedTasksChart = {
            labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };
        var optionsCompletedTasksChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        };
        var completedTasksChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
        // start animation for the Completed Tasks Chart - Line Chart
        this.startAnimationForLineChart(completedTasksChart);
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
        var dataEmailsSubscriptionChart = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        var optionsEmailsSubscriptionChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var emailsSubscriptionChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Bar"]('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);
        //start animation for the Emails Subscription Chart
        this.startAnimationForBarChart(emailsSubscriptionChart);
    };
    ReportsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-reports',
            template: __webpack_require__("../../../../../src/app/reports/reports.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reports/reports.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportsComponent);
    return ReportsComponent;
}());

//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookService = (function () {
    function BookService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    BookService.prototype.getBooks = function () {
        return this.http.get('http://localhost:3000/api/').map(function (res) { return res.json(); });
    };
    BookService.prototype.countBooks = function () {
        return this.http.get('/api/count').map(function (res) { return res.json(); });
    };
    BookService.prototype.addBook = function (Book) {
        return this.http.post('/api/', JSON.stringify(Book), this.options);
    };
    BookService.prototype.getBook = function (Book) {
        return this.http.get("/api/" + Book._id).map(function (res) { return res.json(); });
    };
    BookService.prototype.editBook = function (Book) {
        return this.http.put("/api/" + Book._id, JSON.stringify(Book), this.options);
    };
    BookService.prototype.deleteBook = function (Book) {
        return this.http.delete("/api/" + Book._id, this.options);
    };
    BookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], BookService);
    return BookService;
    var _a;
}());

//# sourceMappingURL=book.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/exam.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExamService = (function () {
    function ExamService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    ExamService.prototype.getAllExams = function () {
        return this.http.get('http://localhost:3000/api/exam/all').map(function (res) { return res.json(); });
    };
    ExamService.prototype.countExams = function () {
        return this.http.get('http://localhost:3000/api/exam/count').map(function (res) { return res.json(); });
    };
    ExamService.prototype.addExam = function (Exam) {
        return this.http.post('http://localhost:3000/api/exam/add', JSON.stringify(Exam), this.options);
    };
    ExamService.prototype.getExam = function (Exam) {
        return this.http.get("http://localhost:3000/api/exam/" + Exam._id).map(function (res) { return res.json(); });
    };
    ExamService.prototype.editExam = function (Exam) {
        return this.http.put("http://localhost:3000/api/exam/" + Exam._id, JSON.stringify(Exam), this.options);
    };
    ExamService.prototype.deleteExam = function (Exam) {
        return this.http.delete("http://localhost:3000/api/exam/" + Exam._id, this.options);
    };
    ExamService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], ExamService);
    return ExamService;
    var _a;
}());

//# sourceMappingURL=exam.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionService = (function () {
    function QuestionService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    QuestionService.prototype.getAllQuestions = function () {
        return this.http.get('http://localhost:3000/api/ques/all').map(function (res) { return res.json(); });
    };
    QuestionService.prototype.countQuestions = function () {
        return this.http.get('http://localhost:3000/api/ques/count').map(function (res) { return res.json(); });
    };
    QuestionService.prototype.addQuestion = function (Question) {
        return this.http.post('http://localhost:3000/api/ques/add', JSON.stringify(Question), this.options);
    };
    QuestionService.prototype.getQuestion = function (Question) {
        return this.http.get("http://localhost:3000/api/ques/" + Question._id).map(function (res) { return res.json(); });
    };
    QuestionService.prototype.editQuestion = function (Question) {
        return this.http.put("http://localhost:3000/api/ques/" + Question._id, JSON.stringify(Question), this.options);
    };
    QuestionService.prototype.deleteQuestion = function (Question) {
        return this.http.delete("http://localhost:3000/api/ques/" + Question._id, this.options);
    };
    QuestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], QuestionService);
    return QuestionService;
    var _a;
}());

//# sourceMappingURL=question.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/questionpaper.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPaperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionPaperService = (function () {
    function QuestionPaperService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    QuestionPaperService.prototype.getAllQuestionPapers = function () {
        return this.http.get('http://localhost:3000/api/quespaper/all').map(function (res) { return res.json(); });
    };
    QuestionPaperService.prototype.countQuestionPapers = function () {
        return this.http.get('http://localhost:3000/api/quespaper/count').map(function (res) { return res.json(); });
    };
    QuestionPaperService.prototype.addQuestionPaper = function (QuestionPaper) {
        return this.http.post('http://localhost:3000/api/quespaper/add', JSON.stringify(QuestionPaper), this.options);
    };
    QuestionPaperService.prototype.getQuestionPaper = function (QuestionPaper) {
        return this.http.get("http://localhost:3000/api/quespaper/" + QuestionPaper._id).map(function (res) { return res.json(); });
    };
    QuestionPaperService.prototype.editQuestionPaper = function (QuestionPaper) {
        return this.http.put("http://localhost:3000/api/quespaper/" + QuestionPaper._id, JSON.stringify(QuestionPaper), this.options);
    };
    QuestionPaperService.prototype.deleteQuestionPaper = function (QuestionPaper) {
        return this.http.delete("http://localhost:3000/api/quespaper/" + QuestionPaper._id, this.options);
    };
    QuestionPaperService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], QuestionPaperService);
    return QuestionPaperService;
    var _a;
}());

//# sourceMappingURL=questionpaper.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/result.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultService = (function () {
    function ResultService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    ResultService.prototype.getAllResults = function () {
        return this.http.get('http://localhost:3000/api/result/all').map(function (res) { return res.json(); });
    };
    ResultService.prototype.countResults = function () {
        return this.http.get('http://localhost:3000/api/result/count').map(function (res) { return res.json(); });
    };
    ResultService.prototype.addResult = function (Result) {
        return this.http.post('http://localhost:3000/api/result/add', JSON.stringify(Result), this.options);
    };
    ResultService.prototype.getResult = function (Result) {
        return this.http.get("http://localhost:3000/api/result/" + Result._id).map(function (res) { return res.json(); });
    };
    ResultService.prototype.editResult = function (Result) {
        return this.http.put("http://localhost:3000/api/result/" + Result._id, JSON.stringify(Result), this.options);
    };
    ResultService.prototype.deleteResult = function (Result) {
        return this.http.delete("http://localhost:3000/api/result/" + Result._id, this.options);
    };
    ResultService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], ResultService);
    return ResultService;
    var _a;
}());

//# sourceMappingURL=result.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    UserService.prototype.getAllUsers = function () {
        return this.http.get('http://localhost:3000/api/user/all').map(function (res) { return res.json(); });
    };
    UserService.prototype.countUsers = function () {
        return this.http.get('http://localhost:3000/api/user/count').map(function (res) { return res.json(); });
    };
    UserService.prototype.addUser = function (User) {
        return this.http.post('http://localhost:3000/api/user/add', JSON.stringify(User), this.options);
    };
    UserService.prototype.getUser = function (User) {
        return this.http.get("http://localhost:3000/api/user/" + User._id).map(function (res) { return res.json(); });
    };
    UserService.prototype.editUser = function (User) {
        return this.http.put("http://localhost:3000/api/user/" + User._id, JSON.stringify(User), this.options);
    };
    UserService.prototype.deleteUser = function (User) {
        return this.http.delete("http://localhost:3000/api/user/" + User._id, this.options);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], UserService);
    return UserService;
    var _a;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/subjects/addsubject/addsubject.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subjects/addsubject/addsubject.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                        <label class=\"control-label\">Add Subject</label>\r\n                        <input type=\"email\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <button class=\"btn btn-success\">Add</button>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <button [routerLink]=\"['/questions/add']\" class=\"btn btn-warning\">Add Questions</button>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                        <div class=\"card card-plain\">\r\n                            <div class=\"card-header\" data-background-color=\"red\">\r\n                                <h4 class=\"title\">All Subjects</h4>\r\n                            </div>\r\n                            <div class=\"card-content table-responsive\">\r\n                                <table class=\"table table-hover\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Subject ID</th>\r\n                                            <th>Subject Name</th>\r\n                                            <th>Number of questions</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td>1</td>\r\n                                            <td>Aptitude</td>\r\n                                            <td>36</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>2</td>\r\n                                            <td>English</td>\r\n                                            <td>78</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>3</td>\r\n                                            <td>Reasoning Ability</td>\r\n                                            <td>23</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>4</td>\r\n                                            <td>Chemistry</td>\r\n                                            <td>38</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>5</td>\r\n                                            <td>Physics</td>\r\n                                            <td>63</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>6</td>\r\n                                            <td>Biology</td>\r\n                                            <td>61</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/subjects/addsubject/addsubject.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSubjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AddSubjectsComponent = (function () {
    function AddSubjectsComponent() {
    }
    AddSubjectsComponent.prototype.ngOnInit = function () {
    };
    AddSubjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-addsubjects',
            template: __webpack_require__("../../../../../src/app/subjects/addsubject/addsubject.component.html"),
            styles: [__webpack_require__("../../../../../src/app/subjects/addsubject/addsubject.component.css")]
        })
    ], AddSubjectsComponent);
    return AddSubjectsComponent;
}());

//# sourceMappingURL=addsubject.component.js.map

/***/ }),

/***/ "../../../../../src/app/subjects/subjects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subjects/subjects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 col-md-4 col-sm-4\">\r\n                    <div class=\"card card-stats\" >\r\n                        <div class=\"card-header\" data-background-color=\"blue\">\r\n                            <i class=\"material-icons\">library_add</i>                        \r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <p class=\"category\">Add Subject</p>\r\n                            <h5 class=\"title\">Add a subject before you add questions</h5>\r\n                            <button [routerLink]=\"['/subjects/add']\" class=\"btn btn-info\">ADD</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-4 col-sm-4\">\r\n                        <div class=\"card card-stats\" >\r\n                            <div class=\"card-header\" data-background-color=\"purple\">\r\n                                <i class=\"material-icons\">mode_edit</i>\r\n                            </div>\r\n                            <div class=\"card-content\">\r\n                                <p class=\"category\">All Subjects</p>\r\n                                <h5 class=\"title\">See all created questions as per subject</h5>\r\n                                <button [routerLink]=\"['/subjects/add']\" class=\"btn btn-primary\">VIEW</button>\r\n                            </div>\r\n                        </div>\r\n                </div>\r\n            </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/subjects/subjects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SubjectsComponent = (function () {
    function SubjectsComponent() {
    }
    SubjectsComponent.prototype.ngOnInit = function () {
    };
    SubjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-subjects',
            template: __webpack_require__("../../../../../src/app/subjects/subjects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/subjects/subjects.component.css")]
        })
    ], SubjectsComponent);
    return SubjectsComponent;
}());

//# sourceMappingURL=subjects.component.js.map

/***/ }),

/***/ "../../../../../src/app/table-list/table-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/table-list/table-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <h4 class=\"title\">Simple Table</h4>\n                        <p class=\"category\">Here is a subtitle for this table</p>\n                    </div>\n                    <div class=\"card-content table-responsive\">\n                        <table class=\"table\">\n                            <thead class=\"text-danger\">\n                                <tr>\n                                    <th>Name</th>\n                                    <th>Country</th>\n                                    <th>City</th>\n                                    <th>Salary</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>Dakota Rice</td>\n                                    <td>Niger</td>\n                                    <td>Oud-Turnhout</td>\n                                    <td class=\"text-danger\">$36,738</td>\n                                </tr>\n                                <tr>\n                                    <td>Minerva Hooper</td>\n                                    <td>Curaçao</td>\n                                    <td>Sinaai-Waas</td>\n                                    <td class=\"text-danger\">$23,789</td>\n                                </tr>\n                                <tr>\n                                    <td>Sage Rodriguez</td>\n                                    <td>Netherlands</td>\n                                    <td>Baileux</td>\n                                    <td class=\"text-danger\">$56,142</td>\n                                </tr>\n                                <tr>\n                                    <td>Philip Chaney</td>\n                                    <td>Korea, South</td>\n                                    <td>Overland Park</td>\n                                    <td class=\"text-danger\">$38,735</td>\n                                </tr>\n                                <tr>\n                                    <td>Doris Greene</td>\n                                    <td>Malawi</td>\n                                    <td>Feldkirchen in Kärnten</td>\n                                    <td class=\"text-danger\">$63,542</td>\n                                </tr>\n                                <tr>\n                                    <td>Mason Porter</td>\n                                    <td>Chile</td>\n                                    <td>Gloucester</td>\n                                    <td class=\"text-danger\">$78,615</td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <h4 class=\"title\">Table on Plain Background</h4>\n                        <p class=\"category\">Here is a subtitle for this table</p>\n                    </div>\n                    <div class=\"card-content table-responsive\">\n                        <table class=\"table table-hover\">\n                            <thead>\n                                <tr>\n                                    <th>ID</th>\n                                    <th>Name</th>\n                                    <th>Salary</th>\n                                    <th>Country</th>\n                                    <th>City</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>1</td>\n                                    <td>Dakota Rice</td>\n                                    <td>$36,738</td>\n                                    <td>Niger</td>\n                                    <td>Oud-Turnhout</td>\n                                </tr>\n                                <tr>\n                                    <td>2</td>\n                                    <td>Minerva Hooper</td>\n                                    <td>$23,789</td>\n                                    <td>Curaçao</td>\n                                    <td>Sinaai-Waas</td>\n                                </tr>\n                                <tr>\n                                    <td>3</td>\n                                    <td>Sage Rodriguez</td>\n                                    <td>$56,142</td>\n                                    <td>Netherlands</td>\n                                    <td>Baileux</td>\n                                </tr>\n                                <tr>\n                                    <td>4</td>\n                                    <td>Philip Chaney</td>\n                                    <td>$38,735</td>\n                                    <td>Korea, South</td>\n                                    <td>Overland Park</td>\n                                </tr>\n                                <tr>\n                                    <td>5</td>\n                                    <td>Doris Greene</td>\n                                    <td>$63,542</td>\n                                    <td>Malawi</td>\n                                    <td>Feldkirchen in Kärnten</td>\n                                </tr>\n                                <tr>\n                                    <td>6</td>\n                                    <td>Mason Porter</td>\n                                    <td>$78,615</td>\n                                    <td>Chile</td>\n                                    <td>Gloucester</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/table-list/table-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableListComponent = (function () {
    function TableListComponent() {
    }
    TableListComponent.prototype.ngOnInit = function () {
    };
    TableListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-table-list',
            template: __webpack_require__("../../../../../src/app/table-list/table-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/table-list/table-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TableListComponent);
    return TableListComponent;
}());

//# sourceMappingURL=table-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/typography/typography.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\" data-background-color=\"red\">\n                    <h4 class=\"title\">Material Dashboard Heading</h4>\n                    <p class=\"category\">Created using Roboto Font Family</p>\n                </div>\n                <div class=\"card-content\">\n                    <div id=\"typography\">\n                        <div class=\"title\">\n                            <h2>Typography</h2>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"tim-typo\">\n                                <h1><span class=\"tim-note\">Header 1</span>The Life of Material Dashboard </h1>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <h2><span class=\"tim-note\">Header 2</span>The life of Material Dashboard </h2>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <h3><span class=\"tim-note\">Header 3</span>The life of Material Dashboard </h3>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <h4><span class=\"tim-note\">Header 4</span>The life of Material Dashboard </h4>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <h5><span class=\"tim-note\">Header 5</span>The life of Material Dashboard </h5>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <h6><span class=\"tim-note\">Header 6</span>The life of Material Dashboard </h6>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <p><span class=\"tim-note\">Paragraph</span>\n                                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <span class=\"tim-note\">Quote</span>\n                                <blockquote>\n                                 <p>\n                                 I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n                                 </p>\n                                 <small>\n                                 Kanye West, Musician\n                                 </small>\n                                </blockquote>\n                            </div>\n\n                            <div class=\"tim-typo\">\n                                <span class=\"tim-note\">Muted Text</span>\n                                <p class=\"text-muted\">\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                                </p>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <span class=\"tim-note\">Primary Text</span>\n                                <p class=\"text-primary\">\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <span class=\"tim-note\">Info Text</span>\n                                <p class=\"text-info\">\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <span class=\"tim-note\">Success Text</span>\n                                <p class=\"text-success\">\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <span class=\"tim-note\">Warning Text</span>\n                                <p class=\"text-warning\">\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                                </p>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <span class=\"tim-note\">Danger Text</span>\n                                <p class=\"text-danger\">\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <h2><span class=\"tim-note\">Small Tag</span>\n                                    Header with small subtitle <br>\n                                    <small>Use \"small\" tag for the headers</small>\n                                </h2>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypographyComponent = (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-typography',
            template: __webpack_require__("../../../../../src/app/typography/typography.component.html"),
            styles: [__webpack_require__("../../../../../src/app/typography/typography.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());

//# sourceMappingURL=typography.component.js.map

/***/ }),

/***/ "../../../../../src/app/upgrade/upgrade.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upgrade/upgrade.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <div class=\"card\">\n                    <div class=\"card-header text-center\" data-background-color=\"red\">\n                        <h4 class=\"title\">Material Dashboard PRO</h4>\n                        <p class=\"category\">Are you looking for more components? Please check our Premium Version of Material Dashboard.</p>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"table-responsive table-upgrade\">\n                            <table class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th></th>\n                                        <th class=\"text-center\">Free</th>\n                                        <th class=\"text-center\">PRO</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>Components</td>\n                                        <td class=\"text-center\">60</td>\n                                        <td class=\"text-center\">200</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Plugins</td>\n                                        <td class=\"text-center\">2</td>\n                                        <td class=\"text-center\">15</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Example Pages</td>\n                                        <td class=\"text-center\">3</td>\n                                        <td class=\"text-center\">27</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Login, Register, Pricing, Lock Pages</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>DataTables, VectorMap, SweetAlert, Wizard, jQueryValidation, FullCalendar etc...</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Mini Sidebar</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Premium Support</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td></td>\n                                        <td class=\"text-center\">Free</td>\n                                        <td class=\"text-center\">Just $49</td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"text-center\"></td>\n                                        <td class=\"text-center\">\n                                            <a href=\"#\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\n                                        </td>\n                                        <td class=\"text-center\">\n                                            <a target=\"_blank\" href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2/?ref=md-free-angular-upgrade-local\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/upgrade/upgrade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpgradeComponent = (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    UpgradeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-upgrade',
            template: __webpack_require__("../../../../../src/app/upgrade/upgrade.component.html"),
            styles: [__webpack_require__("../../../../../src/app/upgrade/upgrade.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpgradeComponent);
    return UpgradeComponent;
}());

//# sourceMappingURL=upgrade.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <div class=\"card\">\n                <div class=\"card-header\" data-background-color=\"red\">\n                    <h4 class=\"title\">Edit Profile</h4>\n                    <p class=\"category\">Complete your profile</p>\n                </div>\n                <div class=\"card-content\">\n                    <form>\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Institute (disabled)</label>\n                                    <input type=\"text\" class=\"form-control\" disabled>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Username</label>\n                                    <input type=\"text\" class=\"form-control\" >\n                                </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Email address</label>\n                                    <input type=\"email\" class=\"form-control\" >\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Fist Name</label>\n                                    <input type=\"text\" class=\"form-control\" >\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Last Name</label>\n                                    <input type=\"text\" class=\"form-control\" >\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Adress</label>\n                                    <input type=\"text\" class=\"form-control\" >\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">City</label>\n                                    <input type=\"text\" class=\"form-control\" >\n                                </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Country</label>\n                                    <input type=\"text\" class=\"form-control\" >\n                                </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Postal Code</label>\n                                    <input type=\"text\" class=\"form-control\" >\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                    <label>About Me</label>\n                                    <div class=\"form-group form-black label-floating is-empty\">\n                                        <label class=\"control-label\"> Student </label>\n                                        <textarea class=\"form-control\" rows=\"5\"></textarea>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <button type=\"submit\" class=\"btn btn-danger pull-right\">Update Profile</button>\n                        <div class=\"clearfix\"></div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4\">\n            <div class=\"card card-profile\">\n                <div class=\"card-avatar\">\n                    <a href=\"#pablo\">\n                        <img class=\"img\" src=\"../assets/img/faces/user.png\" />\n                    </a>\n                </div>\n\n                <div class=\"content\">\n                    <h6 class=\"category text-gray\">Student</h6>\n                    <h4 class=\"card-title\">Shubham Sadhukha</h4>\n                    <p class=\"card-content\">\n                        Just some info about me...\n                    </p>\n                    <a href=\"#pablo\" class=\"btn btn-danger btn-round\">Follow</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserProfileComponent = (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-user-profile',
            template: __webpack_require__("../../../../../src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());

//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map