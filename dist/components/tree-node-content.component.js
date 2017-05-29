import { Component, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { deprecatedSelector } from '../deprecated-selector';
var TreeNodeContent = (function () {
    function TreeNodeContent(elementRef) {
        this.elementRef = elementRef;
        deprecatedSelector('TreeNodeContent', 'tree-node-content', elementRef);
    }
    return TreeNodeContent;
}());
export { TreeNodeContent };
TreeNodeContent.decorators = [
    { type: Component, args: [{
                selector: 'TreeNodeContent, tree-node-content',
                encapsulation: ViewEncapsulation.None,
                template: "\n  <span *ngIf=\"!template\">{{ node.displayField }}</span>\n  <ng-container\n    [ngTemplateOutlet]=\"template\"\n    [ngOutletContext]=\"{ $implicit: node, node: node, index: index }\">\n  </ng-container>",
            },] },
];
/** @nocollapse */
TreeNodeContent.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
TreeNodeContent.propDecorators = {
    'node': [{ type: Input },],
    'index': [{ type: Input },],
    'template': [{ type: Input },],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS1jb250ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBQSxFQUFXLEtBQUEsRUFBTyxpQkFBQSxFQUFnQyxVQUFBLEVBQVcsTUFBTyxlQUFBLENBQWdCO0FBRTdGLE9BQU8sRUFBRSxrQkFBQSxFQUFtQixNQUFPLHdCQUFBLENBQXlCO0FBRzVEO0lBS0UseUJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDeEMsa0JBQWtCLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQXNCSCxzQkFBQztBQUFELENBN0JBLEFBNkJDOztBQXJCTSwwQkFBVSxHQUEwQjtJQUMzQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLFFBQVEsRUFBRSxvQ0FBb0M7Z0JBQzlDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsaU5BS007YUFDakIsRUFBRyxFQUFFO0NBQ0wsQ0FBQztBQUNGLGtCQUFrQjtBQUNYLDhCQUFjLEdBQW1FLGNBQU0sT0FBQTtJQUM5RixFQUFDLElBQUksRUFBRSxVQUFVLEdBQUc7Q0FDbkIsRUFGNkYsQ0FFN0YsQ0FBQztBQUNLLDhCQUFjLEdBQTJDO0lBQ2hFLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO0lBQzFCLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO0lBQzNCLFVBQVUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO0NBQzdCLENBQUMiLCJmaWxlIjoidHJlZS1ub2RlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBUZW1wbGF0ZVJlZiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4uL21vZGVscy90cmVlLW5vZGUubW9kZWwnO1xyXG5pbXBvcnQgeyBkZXByZWNhdGVkU2VsZWN0b3IgfSBmcm9tICcuLi9kZXByZWNhdGVkLXNlbGVjdG9yJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZU5vZGVDb250ZW50IHtcclxuICAgbm9kZTogVHJlZU5vZGU7XHJcbiAgIGluZGV4OiBudW1iZXI7XHJcbiAgIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIGRlcHJlY2F0ZWRTZWxlY3RvcignVHJlZU5vZGVDb250ZW50JywgJ3RyZWUtbm9kZS1jb250ZW50JywgZWxlbWVudFJlZik7XHJcbiAgfVxyXG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBDb21wb25lbnQsIGFyZ3M6IFt7XHJcbiAgc2VsZWN0b3I6ICdUcmVlTm9kZUNvbnRlbnQsIHRyZWUtbm9kZS1jb250ZW50JyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPHNwYW4gKm5nSWY9XCIhdGVtcGxhdGVcIj57eyBub2RlLmRpc3BsYXlGaWVsZCB9fTwvc3Bhbj5cclxuICA8bmctY29udGFpbmVyXHJcbiAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZVwiXHJcbiAgICBbbmdPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBub2RlLCBub2RlOiBub2RlLCBpbmRleDogaW5kZXggfVwiPlxyXG4gIDwvbmctY29udGFpbmVyPmAsXHJcbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ25vZGUnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4naW5kZXgnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4ndGVtcGxhdGUnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG59O1xufVxyXG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==