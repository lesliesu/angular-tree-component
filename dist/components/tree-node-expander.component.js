import { Component, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { deprecatedSelector } from '../deprecated-selector';
var TreeNodeExpanderComponent = (function () {
    function TreeNodeExpanderComponent(elementRef) {
        this.elementRef = elementRef;
        deprecatedSelector('TreeNodeExpander', 'tree-node-expander', elementRef);
    }
    return TreeNodeExpanderComponent;
}());
export { TreeNodeExpanderComponent };
TreeNodeExpanderComponent.decorators = [
    { type: Component, args: [{
                selector: 'TreeNodeExpander, tree-node-expander',
                encapsulation: ViewEncapsulation.None,
                styles: [
                    '.toggle-children-wrapper-expanded .toggle-children { transform: rotate(90deg) }',
                    '.toggle-children-wrapper-collapsed .toggle-children { transform: rotate(0); }',
                    ".toggle-children-wrapper {\n      padding: 2px 3px 5px 1px;\n    }",
                    /* tslint:disable */
                    ".toggle-children {\n        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzRkRFQjcxODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzRkRFQjcwODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5iogFwAAAGhJREFUeNpiYGBgKABigf///zOQg0EARH4A4gZyDIIZ8B/JoAJKDIDhB0CcQIkBRBtEyABkgxwoMQCGD6AbRKoBGAYxQgXIBRuZGKgAKPIC3QLxArnRSHZCIjspk52ZKMrOFBUoAAEGAKnq593MQAZtAAAAAElFTkSuQmCC');\n        height: 8px;\n        width: 9px;\n        background-size: contain;\n        display: inline-block;\n        position: relative;\n        top: 1px;\n        background-repeat: no-repeat;\n        background-position: center;\n    }",
                    /* tslint:enable */
                    ".toggle-children-placeholder {\n        display: inline-block;\n        height: 10px;\n        width: 10px;\n        position: relative;\n        top: 1px;\n        padding-right: 3px;\n    }"
                ],
                template: "\n    <ng-container *mobxAutorun>\n      <span\n        *ngIf=\"node.hasChildren\"\n        [class.toggle-children-wrapper-expanded]=\"node.isExpanded\"\n        [class.toggle-children-wrapper-collapsed]=\"node.isCollapsed\"\n        class=\"toggle-children-wrapper\"\n        (click)=\"node.mouseAction('expanderClick', $event)\">\n\n        <span class=\"toggle-children\"></span>\n      </span>\n      <span\n        *ngIf=\"!node.hasChildren\"\n        class=\"toggle-children-placeholder\">\n      </span>\n    </ng-container>\n  "
            },] },
];
/** @nocollapse */
TreeNodeExpanderComponent.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
TreeNodeExpanderComponent.propDecorators = {
    'node': [{ type: Input },],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS1leHBhbmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQUEsRUFBVyxLQUFBLEVBQU8saUJBQUEsRUFBbUIsVUFBQSxFQUFXLE1BQU8sZUFBQSxDQUFnQjtBQUVoRixPQUFPLEVBQUUsa0JBQUEsRUFBbUIsTUFBTyx3QkFBQSxDQUF5QjtBQUc1RDtJQUdFLG1DQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3hDLGtCQUFrQixDQUFDLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUEyREgsZ0NBQUM7QUFBRCxDQWhFQSxBQWdFQzs7QUExRE0sb0NBQVUsR0FBMEI7SUFDM0MsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUN4QixRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsTUFBTSxFQUFFO29CQUNOLGlGQUFpRjtvQkFDakYsK0VBQStFO29CQUMvRSxvRUFFRTtvQkFDRixvQkFBb0I7b0JBQ3BCLHc3REFVRTtvQkFDRixtQkFBbUI7b0JBQ25CLGlNQU9FO2lCQUNIO2dCQUNELFFBQVEsRUFBRSx5aEJBZ0JUO2FBQ0YsRUFBRyxFQUFFO0NBQ0wsQ0FBQztBQUNGLGtCQUFrQjtBQUNYLHdDQUFjLEdBQW1FLGNBQU0sT0FBQTtJQUM5RixFQUFDLElBQUksRUFBRSxVQUFVLEdBQUc7Q0FDbkIsRUFGNkYsQ0FFN0YsQ0FBQztBQUNLLHdDQUFjLEdBQTJDO0lBQ2hFLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO0NBQ3pCLENBQUMiLCJmaWxlIjoidHJlZS1ub2RlLWV4cGFuZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4uL21vZGVscy90cmVlLW5vZGUubW9kZWwnO1xyXG5pbXBvcnQgeyBkZXByZWNhdGVkU2VsZWN0b3IgfSBmcm9tICcuLi9kZXByZWNhdGVkLXNlbGVjdG9yJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZU5vZGVFeHBhbmRlckNvbXBvbmVudCB7XHJcbiAgIG5vZGU6IFRyZWVOb2RlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIGRlcHJlY2F0ZWRTZWxlY3RvcignVHJlZU5vZGVFeHBhbmRlcicsICd0cmVlLW5vZGUtZXhwYW5kZXInLCBlbGVtZW50UmVmKTtcclxuICB9XHJcbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcclxuICBzZWxlY3RvcjogJ1RyZWVOb2RlRXhwYW5kZXIsIHRyZWUtbm9kZS1leHBhbmRlcicsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzdHlsZXM6IFtcclxuICAgICcudG9nZ2xlLWNoaWxkcmVuLXdyYXBwZXItZXhwYW5kZWQgLnRvZ2dsZS1jaGlsZHJlbiB7IHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB9JyxcclxuICAgICcudG9nZ2xlLWNoaWxkcmVuLXdyYXBwZXItY29sbGFwc2VkIC50b2dnbGUtY2hpbGRyZW4geyB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfScsXHJcbiAgICBgLnRvZ2dsZS1jaGlsZHJlbi13cmFwcGVyIHtcclxuICAgICAgcGFkZGluZzogMnB4IDNweCA1cHggMXB4O1xyXG4gICAgfWAsXHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG4gICAgYC50b2dnbGUtY2hpbGRyZW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVNDQVlBQUFCU08xNXFBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQkFocFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1EWTNJRGM1TGpFMU56YzBOeXdnTWpBeE5TOHdNeTh6TUMweU16bzBNRG8wTWlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wVW1WbVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWU1pXWWpJaUI0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUlIaHRiRzV6T21SalBTSm9kSFJ3T2k4dmNIVnliQzV2Y21jdlpHTXZaV3hsYldWdWRITXZNUzR4THlJZ2VHMXdUVTA2VDNKcFoybHVZV3hFYjJOMWJXVnVkRWxFUFNKMWRXbGtPalkxUlRZek9UQTJPRFpEUmpFeFJFSkJOa1V5UkRnNE4wTkZRVU5DTkRBM0lpQjRiWEJOVFRwRWIyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09rWXpSa1JGUWpjeE9EVXpOVEV4UlRVNFJUUXdSa1F3T0RGRU9VWkVNRUUzSWlCNGJYQk5UVHBKYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2tZelJrUkZRamN3T0RVek5URXhSVFU0UlRRd1JrUXdPREZFT1VaRU1FRTNJaUI0YlhBNlEzSmxZWFJ2Y2xSdmIydzlJa0ZrYjJKbElGQm9iM1J2YzJodmNDQkRReUF5TURFMUlDaE5ZV05wYm5SdmMyZ3BJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TVRrNU56QTFPR0V0WkRJM09DMDBORFprTFdFNE9EZ3ROR000TUdRNFlXSTFOek5tSWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKaFpHOWlaVHBrYjJOcFpEcHdhRzkwYjNOb2IzQTZZelJrWm1ReE1HTXRZMk5sTlMweE1UYzRMV0U1T0dRdFkyTmtabU01T0RrNVlXWXdJaTgrSUR4a1l6cDBhWFJzWlQ0Z1BISmtaanBCYkhRK0lEeHlaR1k2YkdrZ2VHMXNPbXhoYm1jOUluZ3RaR1ZtWVhWc2RDSStaMng1Y0docFkyOXVjend2Y21SbU9teHBQaUE4TDNKa1pqcEJiSFErSUR3dlpHTTZkR2wwYkdVK0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4KzVpb2dGd0FBQUdoSlJFRlVlTnBpWUdCZ0tBQmlnZi8vL3pPUWcwRUFSSDRBNGdaeURJSVo4Qi9Kb0FKS0RJRGhCMENjUUlrQlJCdEV5QUJrZ3h3b01RQ0dENkFiUktvQkdBWXhRZ1hJQlJ1WkdLZ0FLUElDM1FMeEFyblJTSFpDSWpzcGs1MlpLTXJPRkJVb0FBRUdBS25xNTkzTVFBWnRBQUFBQUVsRlRrU3VRbUNDXFwnKTtcclxuICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICB3aWR0aDogOXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogMXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgfWAsXHJcbiAgICAvKiB0c2xpbnQ6ZW5hYmxlICovXHJcbiAgICBgLnRvZ2dsZS1jaGlsZHJlbi1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAxcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgfWBcclxuICBdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICptb2J4QXV0b3J1bj5cclxuICAgICAgPHNwYW5cclxuICAgICAgICAqbmdJZj1cIm5vZGUuaGFzQ2hpbGRyZW5cIlxyXG4gICAgICAgIFtjbGFzcy50b2dnbGUtY2hpbGRyZW4td3JhcHBlci1leHBhbmRlZF09XCJub2RlLmlzRXhwYW5kZWRcIlxyXG4gICAgICAgIFtjbGFzcy50b2dnbGUtY2hpbGRyZW4td3JhcHBlci1jb2xsYXBzZWRdPVwibm9kZS5pc0NvbGxhcHNlZFwiXHJcbiAgICAgICAgY2xhc3M9XCJ0b2dnbGUtY2hpbGRyZW4td3JhcHBlclwiXHJcbiAgICAgICAgKGNsaWNrKT1cIm5vZGUubW91c2VBY3Rpb24oJ2V4cGFuZGVyQ2xpY2snLCAkZXZlbnQpXCI+XHJcblxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidG9nZ2xlLWNoaWxkcmVuXCI+PC9zcGFuPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgKm5nSWY9XCIhbm9kZS5oYXNDaGlsZHJlblwiXHJcbiAgICAgICAgY2xhc3M9XCJ0b2dnbGUtY2hpbGRyZW4tcGxhY2Vob2xkZXJcIj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59LCBdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IEVsZW1lbnRSZWYsIH0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbidub2RlJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcbn1cclxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=