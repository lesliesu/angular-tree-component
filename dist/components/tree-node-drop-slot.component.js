import { Component, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { deprecatedSelector } from '../deprecated-selector';
var TreeNodeDropSlot = (function () {
    function TreeNodeDropSlot(elementRef) {
        this.elementRef = elementRef;
        deprecatedSelector('TreeNodeDropSlot', 'tree-node-drop-slot', elementRef);
    }
    TreeNodeDropSlot.prototype.onDrop = function ($event) {
        this.node.mouseAction('drop', $event.event, {
            from: $event.element,
            to: { parent: this.node, index: this.dropIndex }
        });
    };
    TreeNodeDropSlot.prototype.allowDrop = function (element, $event) {
        return this.node.options.allowDrop(element, { parent: this.node, index: this.dropIndex }, $event);
    };
    return TreeNodeDropSlot;
}());
export { TreeNodeDropSlot };
TreeNodeDropSlot.decorators = [
    { type: Component, args: [{
                selector: 'TreeNodeDropSlot, tree-node-drop-slot',
                encapsulation: ViewEncapsulation.None,
                styles: [
                    '.node-drop-slot { display: block; height: 2px }',
                    '.node-drop-slot.is-dragging-over { background: #ddffee; height: 20px; border: 2px dotted #888; }'
                ],
                template: "\n    <div\n      class=\"node-drop-slot\"\n      (treeDrop)=\"onDrop($event)\"\n      [treeAllowDrop]=\"allowDrop.bind(this)\">\n    </div>\n  "
            },] },
];
/** @nocollapse */
TreeNodeDropSlot.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
TreeNodeDropSlot.propDecorators = {
    'node': [{ type: Input },],
    'dropIndex': [{ type: Input },],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS1kcm9wLXNsb3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFBLEVBQVcsS0FBQSxFQUFPLGlCQUFBLEVBQW1CLFVBQUEsRUFBVyxNQUFPLGVBQUEsQ0FBZ0I7QUFFaEYsT0FBTyxFQUFFLGtCQUFBLEVBQW1CLE1BQU8sd0JBQUEsQ0FBeUI7QUFHNUQ7SUFJRSwwQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN4QyxrQkFBa0IsQ0FBQyxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLE1BQU07UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUMxQyxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU87WUFDcEIsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUU7U0FDakQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFTLEdBQVQsVUFBVSxPQUFPLEVBQUUsTUFBTTtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQTBCSCx1QkFBQztBQUFELENBM0NBLEFBMkNDOztBQXpCTSwyQkFBVSxHQUEwQjtJQUMzQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLFFBQVEsRUFBRSx1Q0FBdUM7Z0JBQ2pELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxNQUFNLEVBQUU7b0JBQ04saURBQWlEO29CQUNqRCxrR0FBa0c7aUJBQ25HO2dCQUNELFFBQVEsRUFBRSxrSkFNVDthQUNGLEVBQUcsRUFBRTtDQUNMLENBQUM7QUFDRixrQkFBa0I7QUFDWCwrQkFBYyxHQUFtRSxjQUFNLE9BQUE7SUFDOUYsRUFBQyxJQUFJLEVBQUUsVUFBVSxHQUFHO0NBQ25CLEVBRjZGLENBRTdGLENBQUM7QUFDSywrQkFBYyxHQUEyQztJQUNoRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtJQUMxQixXQUFXLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtDQUM5QixDQUFDIiwiZmlsZSI6InRyZWUtbm9kZS1kcm9wLXNsb3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XHJcbmltcG9ydCB7IGRlcHJlY2F0ZWRTZWxlY3RvciB9IGZyb20gJy4uL2RlcHJlY2F0ZWQtc2VsZWN0b3InO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlTm9kZURyb3BTbG90IHtcclxuICAgbm9kZTogVHJlZU5vZGU7XHJcbiAgIGRyb3BJbmRleDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIGRlcHJlY2F0ZWRTZWxlY3RvcignVHJlZU5vZGVEcm9wU2xvdCcsICd0cmVlLW5vZGUtZHJvcC1zbG90JywgZWxlbWVudFJlZik7XHJcbiAgfVxyXG5cclxuICBvbkRyb3AoJGV2ZW50KSB7XHJcbiAgICB0aGlzLm5vZGUubW91c2VBY3Rpb24oJ2Ryb3AnLCAkZXZlbnQuZXZlbnQsIHtcclxuICAgICAgZnJvbTogJGV2ZW50LmVsZW1lbnQsXHJcbiAgICAgIHRvOiB7IHBhcmVudDogdGhpcy5ub2RlLCBpbmRleDogdGhpcy5kcm9wSW5kZXggfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhbGxvd0Ryb3AoZWxlbWVudCwgJGV2ZW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub2RlLm9wdGlvbnMuYWxsb3dEcm9wKGVsZW1lbnQsIHsgcGFyZW50OiB0aGlzLm5vZGUsIGluZGV4OiB0aGlzLmRyb3BJbmRleCB9LCAkZXZlbnQpO1xyXG4gIH1cclxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogQ29tcG9uZW50LCBhcmdzOiBbe1xyXG4gIHNlbGVjdG9yOiAnVHJlZU5vZGVEcm9wU2xvdCwgdHJlZS1ub2RlLWRyb3Atc2xvdCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzdHlsZXM6IFtcclxuICAgICcubm9kZS1kcm9wLXNsb3QgeyBkaXNwbGF5OiBibG9jazsgaGVpZ2h0OiAycHggfScsXHJcbiAgICAnLm5vZGUtZHJvcC1zbG90LmlzLWRyYWdnaW5nLW92ZXIgeyBiYWNrZ3JvdW5kOiAjZGRmZmVlOyBoZWlnaHQ6IDIwcHg7IGJvcmRlcjogMnB4IGRvdHRlZCAjODg4OyB9J1xyXG4gIF0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3M9XCJub2RlLWRyb3Atc2xvdFwiXHJcbiAgICAgICh0cmVlRHJvcCk9XCJvbkRyb3AoJGV2ZW50KVwiXHJcbiAgICAgIFt0cmVlQWxsb3dEcm9wXT1cImFsbG93RHJvcC5iaW5kKHRoaXMpXCI+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ25vZGUnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nZHJvcEluZGV4JzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcbn1cclxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=