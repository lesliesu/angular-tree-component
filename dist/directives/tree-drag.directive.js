import { Directive, Input, HostListener, Renderer, ElementRef } from '@angular/core';
import { TreeDraggedElement } from '../models/tree-dragged-element.model';
var DRAG_OVER_CLASS = 'is-dragging-over';
var TreeDragDirective = (function () {
    function TreeDragDirective(el, renderer, treeDraggedElement) {
        this.el = el;
        this.renderer = renderer;
        this.treeDraggedElement = treeDraggedElement;
    }
    TreeDragDirective.prototype.ngDoCheck = function () {
        this.renderer.setElementAttribute(this.el.nativeElement, 'draggable', this.treeDragEnabled ? 'true' : 'false');
    };
    TreeDragDirective.prototype.onDragStart = function (ev) {
        var _this = this;
        // setting the data is required by firefox
        ev.dataTransfer.setData('text', ev.target.id);
        setTimeout(function () {
            _this.treeDraggedElement.set(_this.draggedElement);
            if (_this.draggedElement.mouseAction) {
                _this.draggedElement.mouseAction('dragStart', ev);
            }
        }, 30);
    };
    TreeDragDirective.prototype.onDragEnd = function () {
        if (this.draggedElement.mouseAction) {
            this.draggedElement.mouseAction('dragEnd');
        }
        this.treeDraggedElement.set(null);
    };
    return TreeDragDirective;
}());
export { TreeDragDirective };
TreeDragDirective.decorators = [
    { type: Directive, args: [{
                selector: '[treeDrag]'
            },] },
];
/** @nocollapse */
TreeDragDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
    { type: TreeDraggedElement, },
]; };
TreeDragDirective.propDecorators = {
    'draggedElement': [{ type: Input, args: ['treeDrag',] },],
    'treeDragEnabled': [{ type: Input },],
    'onDragStart': [{ type: HostListener, args: ['dragstart', ['$event'],] },],
    'onDragEnd': [{ type: HostListener, args: ['dragend',] },],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9kaXJlY3RpdmVzL3RyZWUtZHJhZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQUEsRUFBVyxLQUFBLEVBQU8sWUFBQSxFQUFjLFFBQUEsRUFBVSxVQUFBLEVBQW9CLE1BQU8sZUFBQSxDQUFnQjtBQUM5RixPQUFPLEVBQUUsa0JBQUEsRUFBbUIsTUFBTyxzQ0FBQSxDQUF1QztBQUUxRSxJQUFNLGVBQUEsR0FBa0Isa0JBQUEsQ0FBbUI7QUFHM0M7SUFJRSwyQkFBb0IsRUFBYyxFQUFVLFFBQWtCLEVBQVUsa0JBQXNDO1FBQTFGLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUM5RyxDQUFDO0lBRUQscUNBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQ2pILENBQUM7SUFFQSx1Q0FBVyxHQUFYLFVBQVksRUFBRTtRQUFkLGlCQVVBO1FBVEMsMENBQTBDO1FBQzFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTlDLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2pELEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25ELENBQUM7UUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRUEscUNBQVMsR0FBVDtRQUNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBa0JILHdCQUFDO0FBQUQsQ0E5Q0EsQUE4Q0M7O0FBakJNLDRCQUFVLEdBQTBCO0lBQzNDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDeEIsUUFBUSxFQUFFLFlBQVk7YUFDdkIsRUFBRyxFQUFFO0NBQ0wsQ0FBQztBQUNGLGtCQUFrQjtBQUNYLGdDQUFjLEdBQW1FLGNBQU0sT0FBQTtJQUM5RixFQUFDLElBQUksRUFBRSxVQUFVLEdBQUc7SUFDcEIsRUFBQyxJQUFJLEVBQUUsUUFBUSxHQUFHO0lBQ2xCLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixHQUFHO0NBQzNCLEVBSjZGLENBSTdGLENBQUM7QUFDSyxnQ0FBYyxHQUEyQztJQUNoRSxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUcsRUFBRSxFQUFFO0lBQzFELGlCQUFpQixFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7SUFDckMsYUFBYSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFHLEVBQUUsRUFBRTtJQUMzRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFHLEVBQUUsRUFBRTtDQUMxRCxDQUFDIiwiZmlsZSI6InRyZWUtZHJhZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdExpc3RlbmVyLCBSZW5kZXJlciwgRWxlbWVudFJlZiwgRG9DaGVjayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmVlRHJhZ2dlZEVsZW1lbnQgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1kcmFnZ2VkLWVsZW1lbnQubW9kZWwnO1xyXG5cclxuY29uc3QgRFJBR19PVkVSX0NMQVNTID0gJ2lzLWRyYWdnaW5nLW92ZXInO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlRHJhZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIERvQ2hlY2sge1xyXG4gICBkcmFnZ2VkRWxlbWVudDtcclxuICAgdHJlZURyYWdFbmFibGVkO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlciwgcHJpdmF0ZSB0cmVlRHJhZ2dlZEVsZW1lbnQ6IFRyZWVEcmFnZ2VkRWxlbWVudCkge1xyXG4gIH1cclxuXHJcbiAgbmdEb0NoZWNrKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2RyYWdnYWJsZScsIHRoaXMudHJlZURyYWdFbmFibGVkID8gJ3RydWUnIDogJ2ZhbHNlJyk7XHJcbiAgfVxyXG5cclxuICAgb25EcmFnU3RhcnQoZXYpIHtcclxuICAgIC8vIHNldHRpbmcgdGhlIGRhdGEgaXMgcmVxdWlyZWQgYnkgZmlyZWZveFxyXG4gICAgZXYuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCBldi50YXJnZXQuaWQpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnRyZWVEcmFnZ2VkRWxlbWVudC5zZXQodGhpcy5kcmFnZ2VkRWxlbWVudCk7XHJcbiAgICAgIGlmICh0aGlzLmRyYWdnZWRFbGVtZW50Lm1vdXNlQWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2VkRWxlbWVudC5tb3VzZUFjdGlvbignZHJhZ1N0YXJ0JywgZXYpO1xyXG4gICAgICB9XHJcbiAgICB9LCAzMCk7XHJcbiAgfVxyXG5cclxuICAgb25EcmFnRW5kKCkge1xyXG4gICAgaWYgKHRoaXMuZHJhZ2dlZEVsZW1lbnQubW91c2VBY3Rpb24pIHtcclxuICAgICAgdGhpcy5kcmFnZ2VkRWxlbWVudC5tb3VzZUFjdGlvbignZHJhZ0VuZCcpO1xyXG4gICAgfVxyXG4gICAgdGhpcy50cmVlRHJhZ2dlZEVsZW1lbnQuc2V0KG51bGwpO1xyXG4gIH1cclxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xyXG4gIHNlbGVjdG9yOiAnW3RyZWVEcmFnXSdcclxufSwgXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBFbGVtZW50UmVmLCB9LFxue3R5cGU6IFJlbmRlcmVyLCB9LFxue3R5cGU6IFRyZWVEcmFnZ2VkRWxlbWVudCwgfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ2RyYWdnZWRFbGVtZW50JzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsndHJlZURyYWcnLCBdIH0sXSxcbid0cmVlRHJhZ0VuYWJsZWQnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nb25EcmFnU3RhcnQnOiBbeyB0eXBlOiBIb3N0TGlzdGVuZXIsIGFyZ3M6IFsnZHJhZ3N0YXJ0JywgWyckZXZlbnQnXSwgXSB9LF0sXG4nb25EcmFnRW5kJzogW3sgdHlwZTogSG9zdExpc3RlbmVyLCBhcmdzOiBbJ2RyYWdlbmQnLCBdIH0sXSxcbn07XG59XHJcblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19