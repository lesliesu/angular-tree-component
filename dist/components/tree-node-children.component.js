import { Component, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { deprecatedSelector } from '../deprecated-selector';
var TreeNodeChildrenComponent = (function () {
    function TreeNodeChildrenComponent(elementRef) {
        this.elementRef = elementRef;
        deprecatedSelector('TreeNodeChildren', 'tree-node-children', elementRef);
    }
    return TreeNodeChildrenComponent;
}());
export { TreeNodeChildrenComponent };
TreeNodeChildrenComponent.decorators = [
    { type: Component, args: [{
                selector: 'TreeNodeChildren, tree-node-children',
                encapsulation: ViewEncapsulation.None,
                styles: [
                    '.tree-children.tree-children-no-padding { padding-left: 0 }',
                    '.tree-children { padding-left: 20px; overflow: hidden }'
                ],
                template: "\n    <ng-container *mobxAutorun>\n      <div [class.tree-children]=\"true\"\n          [class.tree-children-no-padding]=\"node.options.levelPadding\"\n          *treeAnimateOpen=\"\n            node.isExpanded;\n            speed:node.options.animateExpand;\n            acceleration:node.options.animateAcceleration;\n            enabled:node.options.animateExpand\">\n        <tree-node-collection\n          *ngIf=\"node.children\"\n          [nodes]=\"node.children\"\n          [templates]=\"templates\"\n          [treeModel]=\"node.treeModel\">\n        </tree-node-collection>\n        <tree-loading-component\n          [style.padding-left]=\"node.getNodePadding()\"\n          class=\"tree-node-loading\"\n          *ngIf=\"!node.children\"\n          [template]=\"templates.loadingTemplate\"\n          [node]=\"node\"\n        ></tree-loading-component>\n      </div>\n    </ng-container>\n  "
            },] },
];
/** @nocollapse */
TreeNodeChildrenComponent.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
TreeNodeChildrenComponent.propDecorators = {
    'node': [{ type: Input },],
    'templates': [{ type: Input },],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS1jaGlsZHJlbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQUEsRUFBVyxLQUFBLEVBQU8saUJBQUEsRUFBbUIsVUFBQSxFQUFXLE1BQU8sZUFBQSxDQUFnQjtBQUVoRixPQUFPLEVBQUUsa0JBQUEsRUFBbUIsTUFBTyx3QkFBQSxDQUF5QjtBQUc1RDtJQUlFLG1DQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3hDLGtCQUFrQixDQUFDLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUE0Q0gsZ0NBQUM7QUFBRCxDQWxEQSxBQWtEQzs7QUEzQ00sb0NBQVUsR0FBMEI7SUFDM0MsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUN4QixRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsTUFBTSxFQUFFO29CQUNOLDZEQUE2RDtvQkFDN0QseURBQXlEO2lCQUMxRDtnQkFDRCxRQUFRLEVBQUUsMjRCQXdCVDthQUNGLEVBQUcsRUFBRTtDQUNMLENBQUM7QUFDRixrQkFBa0I7QUFDWCx3Q0FBYyxHQUFtRSxjQUFNLE9BQUE7SUFDOUYsRUFBQyxJQUFJLEVBQUUsVUFBVSxHQUFHO0NBQ25CLEVBRjZGLENBRTdGLENBQUM7QUFDSyx3Q0FBYyxHQUEyQztJQUNoRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtJQUMxQixXQUFXLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtDQUM5QixDQUFDIiwiZmlsZSI6InRyZWUtbm9kZS1jaGlsZHJlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1ub2RlLm1vZGVsJztcclxuaW1wb3J0IHsgZGVwcmVjYXRlZFNlbGVjdG9yIH0gZnJvbSAnLi4vZGVwcmVjYXRlZC1zZWxlY3Rvcic7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlQ2hpbGRyZW5Db21wb25lbnQge1xyXG4gICBub2RlOiBUcmVlTm9kZTtcclxuICAgdGVtcGxhdGVzOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgZGVwcmVjYXRlZFNlbGVjdG9yKCdUcmVlTm9kZUNoaWxkcmVuJywgJ3RyZWUtbm9kZS1jaGlsZHJlbicsIGVsZW1lbnRSZWYpO1xyXG4gIH1cclxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogQ29tcG9uZW50LCBhcmdzOiBbe1xyXG4gIHNlbGVjdG9yOiAnVHJlZU5vZGVDaGlsZHJlbiwgdHJlZS1ub2RlLWNoaWxkcmVuJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHN0eWxlczogW1xyXG4gICAgJy50cmVlLWNoaWxkcmVuLnRyZWUtY2hpbGRyZW4tbm8tcGFkZGluZyB7IHBhZGRpbmctbGVmdDogMCB9JyxcclxuICAgICcudHJlZS1jaGlsZHJlbiB7IHBhZGRpbmctbGVmdDogMjBweDsgb3ZlcmZsb3c6IGhpZGRlbiB9J1xyXG4gIF0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgKm1vYnhBdXRvcnVuPlxyXG4gICAgICA8ZGl2IFtjbGFzcy50cmVlLWNoaWxkcmVuXT1cInRydWVcIlxyXG4gICAgICAgICAgW2NsYXNzLnRyZWUtY2hpbGRyZW4tbm8tcGFkZGluZ109XCJub2RlLm9wdGlvbnMubGV2ZWxQYWRkaW5nXCJcclxuICAgICAgICAgICp0cmVlQW5pbWF0ZU9wZW49XCJcclxuICAgICAgICAgICAgbm9kZS5pc0V4cGFuZGVkO1xyXG4gICAgICAgICAgICBzcGVlZDpub2RlLm9wdGlvbnMuYW5pbWF0ZUV4cGFuZDtcclxuICAgICAgICAgICAgYWNjZWxlcmF0aW9uOm5vZGUub3B0aW9ucy5hbmltYXRlQWNjZWxlcmF0aW9uO1xyXG4gICAgICAgICAgICBlbmFibGVkOm5vZGUub3B0aW9ucy5hbmltYXRlRXhwYW5kXCI+XHJcbiAgICAgICAgPHRyZWUtbm9kZS1jb2xsZWN0aW9uXHJcbiAgICAgICAgICAqbmdJZj1cIm5vZGUuY2hpbGRyZW5cIlxyXG4gICAgICAgICAgW25vZGVzXT1cIm5vZGUuY2hpbGRyZW5cIlxyXG4gICAgICAgICAgW3RlbXBsYXRlc109XCJ0ZW1wbGF0ZXNcIlxyXG4gICAgICAgICAgW3RyZWVNb2RlbF09XCJub2RlLnRyZWVNb2RlbFwiPlxyXG4gICAgICAgIDwvdHJlZS1ub2RlLWNvbGxlY3Rpb24+XHJcbiAgICAgICAgPHRyZWUtbG9hZGluZy1jb21wb25lbnRcclxuICAgICAgICAgIFtzdHlsZS5wYWRkaW5nLWxlZnRdPVwibm9kZS5nZXROb2RlUGFkZGluZygpXCJcclxuICAgICAgICAgIGNsYXNzPVwidHJlZS1ub2RlLWxvYWRpbmdcIlxyXG4gICAgICAgICAgKm5nSWY9XCIhbm9kZS5jaGlsZHJlblwiXHJcbiAgICAgICAgICBbdGVtcGxhdGVdPVwidGVtcGxhdGVzLmxvYWRpbmdUZW1wbGF0ZVwiXHJcbiAgICAgICAgICBbbm9kZV09XCJub2RlXCJcclxuICAgICAgICA+PC90cmVlLWxvYWRpbmctY29tcG9uZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSwgXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBFbGVtZW50UmVmLCB9LFxuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nbm9kZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbid0ZW1wbGF0ZXMnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG59O1xufVxyXG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==