import { Component, Input, Output, EventEmitter, Renderer, ElementRef, ViewEncapsulation, ContentChild, HostListener, ViewChild } from '@angular/core';
import { TreeModel } from '../models/tree.model';
import { TreeDraggedElement } from '../models/tree-dragged-element.model';
import { deprecatedSelector } from '../deprecated-selector';
import * as _ from 'lodash';
var includes = _.includes, pick = _.pick;
var TreeComponent = (function () {
    function TreeComponent(treeModel, treeDraggedElement, renderer, elementRef) {
        var _this = this;
        this.treeModel = treeModel;
        this.treeDraggedElement = treeDraggedElement;
        this.renderer = renderer;
        this.elementRef = elementRef;
        deprecatedSelector('Tree', 'tree-root', elementRef);
        treeModel.eventNames.forEach(function (name) { return _this[name] = new EventEmitter(); });
    }
    Object.defineProperty(TreeComponent.prototype, "nodes", {
        // Will be handled in ngOnChanges
        set: function (nodes) { },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeComponent.prototype, "options", {
        set: function (options) { },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeComponent.prototype, "focused", {
        set: function (value) {
            this.treeModel.setFocus(value);
        },
        enumerable: true,
        configurable: true
    });
    TreeComponent.prototype.onKeydown = function ($event) {
        if (!this.treeModel.isFocused)
            return;
        if (includes(['input', 'textarea'], document.activeElement.tagName.toLowerCase()))
            return;
        var focusedNode = this.treeModel.getFocusedNode();
        this.treeModel.performKeyAction(focusedNode, $event);
    };
    TreeComponent.prototype.onMousedown = function ($event) {
        var insideClick = this.renderer.invokeElementMethod($event.target, 'closest', ['Tree']);
        if (!insideClick) {
            this.treeModel.setFocus(false);
        }
    };
    TreeComponent.prototype.ngOnChanges = function (changes) {
        this.treeModel.setData({
            options: changes.options && changes.options.currentValue,
            nodes: changes.nodes && changes.nodes.currentValue,
            events: pick(this, this.treeModel.eventNames)
        });
    };
    TreeComponent.prototype.sizeChanged = function () {
        this.viewportComponent.setViewport();
    };
    return TreeComponent;
}());
export { TreeComponent };
TreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'Tree, tree-root',
                encapsulation: ViewEncapsulation.None,
                providers: [TreeModel],
                styles: [
                    '.tree-children { padding-left: 20px }',
                    '.empty-tree-drop-slot .node-drop-slot { height: 20px; min-width: 100px }',
                    ".tree {\n      width: 100%;\n      position:relative;\n      display: inline-block;\n      cursor: pointer;\n      -webkit-touch-callout: none; /* iOS Safari */\n      -webkit-user-select: none;   /* Chrome/Safari/Opera */\n      -khtml-user-select: none;    /* Konqueror */\n      -moz-user-select: none;      /* Firefox */\n      -ms-user-select: none;       /* IE/Edge */\n      user-select: none;           /* non-prefixed version, currently not supported by any browser */\n    }"
                ],
                template: "\n    <tree-viewport #viewport>\n      <div\n        class=\"tree\"\n        [class.node-dragging]=\"treeDraggedElement.isDragging()\">\n        <tree-node-collection\n          *ngIf=\"treeModel.roots\"\n          [nodes]=\"treeModel.roots\"\n          [treeModel]=\"treeModel\"\n          [templates]=\"{\n            loadingTemplate: loadingTemplate,\n            treeNodeTemplate: treeNodeTemplate,\n            treeNodeWrapperTemplate: treeNodeWrapperTemplate,\n            treeNodeFullTemplate: treeNodeFullTemplate\n          }\">\n        </tree-node-collection>\n        <tree-node-drop-slot\n          class=\"empty-tree-drop-slot\"\n          *ngIf=\"treeModel.isEmptyTree()\"\n          [dropIndex]=\"0\"\n          [node]=\"treeModel.virtualRoot\">\n        </tree-node-drop-slot>\n      </div>\n    </tree-viewport>\n  "
            },] },
];
/** @nocollapse */
TreeComponent.ctorParameters = function () { return [
    { type: TreeModel, },
    { type: TreeDraggedElement, },
    { type: Renderer, },
    { type: ElementRef, },
]; };
TreeComponent.propDecorators = {
    'loadingTemplate': [{ type: ContentChild, args: ['loadingTemplate',] },],
    'treeNodeTemplate': [{ type: ContentChild, args: ['treeNodeTemplate',] },],
    'treeNodeWrapperTemplate': [{ type: ContentChild, args: ['treeNodeWrapperTemplate',] },],
    'treeNodeFullTemplate': [{ type: ContentChild, args: ['treeNodeFullTemplate',] },],
    'viewportComponent': [{ type: ViewChild, args: ['viewport',] },],
    'nodes': [{ type: Input },],
    'options': [{ type: Input },],
    'focused': [{ type: Input },],
    'onToggleExpanded': [{ type: Output },],
    'onActivate': [{ type: Output },],
    'onDeactivate': [{ type: Output },],
    'onFocus': [{ type: Output },],
    'onBlur': [{ type: Output },],
    'onUpdateData': [{ type: Output },],
    'onInitialized': [{ type: Output },],
    'onMoveNode': [{ type: Output },],
    'onLoadChildren': [{ type: Output },],
    'onChangeFilter': [{ type: Output },],
    'onEvent': [{ type: Output },],
    'toggleExpanded': [{ type: Output },],
    'activate': [{ type: Output },],
    'deactivate': [{ type: Output },],
    'focus': [{ type: Output },],
    'blur': [{ type: Output },],
    'updateData': [{ type: Output },],
    'initialized': [{ type: Output },],
    'moveNode': [{ type: Output },],
    'loadChildren': [{ type: Output },],
    'changeFilter': [{ type: Output },],
    'event': [{ type: Output },],
    'onKeydown': [{ type: HostListener, args: ['body: keydown', ['$event'],] },],
    'onMousedown': [{ type: HostListener, args: ['body: mousedown', ['$event'],] },],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBQSxFQUFPLE1BQUEsRUFBbUIsWUFBQSxFQUFjLFFBQUEsRUFBVSxVQUFBLEVBQzdELGlCQUFpQixFQUFFLFlBQUEsRUFBMkIsWUFBQSxFQUFjLFNBQUEsRUFDN0QsTUFBTSxlQUFBLENBQWdCO0FBQ3ZCLE9BQU8sRUFBRSxTQUFBLEVBQVUsTUFBTyxzQkFBQSxDQUF1QjtBQUVqRCxPQUFPLEVBQUUsa0JBQUEsRUFBbUIsTUFBTyxzQ0FBQSxDQUF1QztBQUcxRSxPQUFPLEVBQUUsa0JBQUEsRUFBbUIsTUFBTyx3QkFBQSxDQUF5QjtBQUU1RCxPQUFPLEtBQUssQ0FBQSxNQUFPLFFBQUEsQ0FBUztBQUNwQixJQUFBLHFCQUFBLEVBQVUsYUFBQSxDQUFZO0FBRzlCO0lBMkNFLHVCQUNTLFNBQW9CLEVBQ3BCLGtCQUFzQyxFQUNyQyxRQUFrQixFQUNsQixVQUFzQjtRQUpoQyxpQkFRQztRQVBRLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUNyQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFFNUIsa0JBQWtCLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNwRCxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLFlBQVksRUFBRSxFQUEvQixDQUErQixDQUFDLENBQUM7SUFDNUUsQ0FBQztJQXZDQSxzQkFBSSxnQ0FBSztRQURWLGlDQUFpQzthQUNoQyxVQUFVLEtBQVksSUFBSSxDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFDNUIsc0JBQUksa0NBQU87YUFBWCxVQUFZLE9BQW9CLElBQUksQ0FBQzs7O09BQUE7SUFBQSxDQUFDO0lBRXRDLHNCQUFJLGtDQUFPO2FBQVgsVUFBWSxLQUFjO1lBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBcUNELGlDQUFTLEdBQVQsVUFBVSxNQUFNO1FBQ2QsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUN0QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEVBQzlCLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUM7UUFFMUQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUVwRCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBR0QsbUNBQVcsR0FBWCxVQUFZLE1BQU07UUFDaEIsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFMUYsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUM7SUFDSCxDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLE9BQU87UUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFDckIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZO1lBQ3hELEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWTtZQUNsRCxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztTQUM5QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBMEZILG9CQUFDO0FBQUQsQ0E3S0EsQUE2S0M7O0FBekZNLHdCQUFVLEdBQTBCO0lBQzNDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDeEIsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDdEIsTUFBTSxFQUFFO29CQUNOLHVDQUF1QztvQkFDdkMsMEVBQTBFO29CQUMxRSxzZUFXRTtpQkFDSDtnQkFDRCxRQUFRLEVBQUUsbTBCQXdCVDthQUNGLEVBQUcsRUFBRTtDQUNMLENBQUM7QUFDRixrQkFBa0I7QUFDWCw0QkFBYyxHQUFtRSxjQUFNLE9BQUE7SUFDOUYsRUFBQyxJQUFJLEVBQUUsU0FBUyxHQUFHO0lBQ25CLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixHQUFHO0lBQzVCLEVBQUMsSUFBSSxFQUFFLFFBQVEsR0FBRztJQUNsQixFQUFDLElBQUksRUFBRSxVQUFVLEdBQUc7Q0FDbkIsRUFMNkYsQ0FLN0YsQ0FBQztBQUNLLDRCQUFjLEdBQTJDO0lBQ2hFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLGlCQUFpQixFQUFHLEVBQUUsRUFBRTtJQUN6RSxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRyxFQUFFLEVBQUU7SUFDM0UseUJBQXlCLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMseUJBQXlCLEVBQUcsRUFBRSxFQUFFO0lBQ3pGLHNCQUFzQixFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLHNCQUFzQixFQUFHLEVBQUUsRUFBRTtJQUNuRixtQkFBbUIsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUcsRUFBRSxFQUFFO0lBQ2pFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO0lBQzNCLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO0lBQzdCLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO0lBQzdCLGtCQUFrQixFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDdkMsWUFBWSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDakMsY0FBYyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDbkMsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDOUIsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDN0IsY0FBYyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDbkMsZUFBZSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDcEMsWUFBWSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDakMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUNyQyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQ3JDLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQzlCLGdCQUFnQixFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDckMsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDL0IsWUFBWSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDakMsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDNUIsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDM0IsWUFBWSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDakMsYUFBYSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDbEMsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDL0IsY0FBYyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDbkMsY0FBYyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDbkMsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDNUIsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFHLEVBQUUsRUFBRTtJQUM3RSxhQUFhLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRyxFQUFFLEVBQUU7Q0FDaEYsQ0FBQyIsImZpbGUiOiJ0cmVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25DaGFuZ2VzLCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyLCBFbGVtZW50UmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLCBDb250ZW50Q2hpbGQsIFRlbXBsYXRlUmVmLCBIb3N0TGlzdGVuZXIsIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmVlTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS5tb2RlbCc7XHJcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XHJcbmltcG9ydCB7IFRyZWVEcmFnZ2VkRWxlbWVudCB9IGZyb20gJy4uL21vZGVscy90cmVlLWRyYWdnZWQtZWxlbWVudC5tb2RlbCc7XHJcbmltcG9ydCB7IFRyZWVPcHRpb25zIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtb3B0aW9ucy5tb2RlbCc7XHJcbmltcG9ydCB7IFRyZWVWaWV3cG9ydENvbXBvbmVudCB9IGZyb20gJy4vdHJlZS12aWV3cG9ydC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBkZXByZWNhdGVkU2VsZWN0b3IgfSBmcm9tICcuLi9kZXByZWNhdGVkLXNlbGVjdG9yJztcclxuXHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuY29uc3QgeyBpbmNsdWRlcywgcGljayB9ICA9IF87XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIF9ub2RlczogYW55W107XHJcbiAgX29wdGlvbnM6IFRyZWVPcHRpb25zO1xyXG5cclxuICAgbG9hZGluZ1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICB0cmVlTm9kZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICB0cmVlTm9kZVdyYXBwZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICAgdHJlZU5vZGVGdWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gICB2aWV3cG9ydENvbXBvbmVudDogVHJlZVZpZXdwb3J0Q29tcG9uZW50O1xyXG5cclxuICAvLyBXaWxsIGJlIGhhbmRsZWQgaW4gbmdPbkNoYW5nZXNcclxuICAgc2V0IG5vZGVzKG5vZGVzOiBhbnlbXSkgeyB9O1xyXG4gICBzZXQgb3B0aW9ucyhvcHRpb25zOiBUcmVlT3B0aW9ucykgeyB9O1xyXG5cclxuICAgc2V0IGZvY3VzZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMudHJlZU1vZGVsLnNldEZvY3VzKHZhbHVlKTtcclxuICB9XHJcblxyXG4gICBvblRvZ2dsZUV4cGFuZGVkO1xyXG4gICBvbkFjdGl2YXRlO1xyXG4gICBvbkRlYWN0aXZhdGU7XHJcbiAgIG9uRm9jdXM7XHJcbiAgIG9uQmx1cjtcclxuICAgb25VcGRhdGVEYXRhO1xyXG4gICBvbkluaXRpYWxpemVkO1xyXG4gICBvbk1vdmVOb2RlO1xyXG4gICBvbkxvYWRDaGlsZHJlbjtcclxuICAgb25DaGFuZ2VGaWx0ZXI7XHJcbiAgIG9uRXZlbnQ7XHJcblxyXG4gICB0b2dnbGVFeHBhbmRlZDtcclxuICAgYWN0aXZhdGU7XHJcbiAgIGRlYWN0aXZhdGU7XHJcbiAgIGZvY3VzO1xyXG4gICBibHVyO1xyXG4gICB1cGRhdGVEYXRhO1xyXG4gICBpbml0aWFsaXplZDtcclxuICAgbW92ZU5vZGU7XHJcbiAgIGxvYWRDaGlsZHJlbjtcclxuICAgY2hhbmdlRmlsdGVyO1xyXG4gICBldmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgdHJlZU1vZGVsOiBUcmVlTW9kZWwsXHJcbiAgICBwdWJsaWMgdHJlZURyYWdnZWRFbGVtZW50OiBUcmVlRHJhZ2dlZEVsZW1lbnQsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG5cclxuICAgICAgZGVwcmVjYXRlZFNlbGVjdG9yKCdUcmVlJywgJ3RyZWUtcm9vdCcsIGVsZW1lbnRSZWYpO1xyXG4gICAgICB0cmVlTW9kZWwuZXZlbnROYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB0aGlzW25hbWVdID0gbmV3IEV2ZW50RW1pdHRlcigpKTtcclxuICB9XHJcblxyXG4gIFxyXG4gIG9uS2V5ZG93bigkZXZlbnQpIHtcclxuICAgIGlmICghdGhpcy50cmVlTW9kZWwuaXNGb2N1c2VkKSByZXR1cm47XHJcbiAgICBpZiAoaW5jbHVkZXMoWydpbnB1dCcsICd0ZXh0YXJlYSddLFxyXG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGZvY3VzZWROb2RlID0gdGhpcy50cmVlTW9kZWwuZ2V0Rm9jdXNlZE5vZGUoKTtcclxuXHJcbiAgICB0aGlzLnRyZWVNb2RlbC5wZXJmb3JtS2V5QWN0aW9uKGZvY3VzZWROb2RlLCAkZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgb25Nb3VzZWRvd24oJGV2ZW50KSB7XHJcbiAgICBjb25zdCBpbnNpZGVDbGljayA9IHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCgkZXZlbnQudGFyZ2V0LCAnY2xvc2VzdCcsIFsnVHJlZSddKTtcclxuXHJcbiAgICBpZiAoIWluc2lkZUNsaWNrKSB7XHJcbiAgICAgIHRoaXMudHJlZU1vZGVsLnNldEZvY3VzKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcclxuICAgIHRoaXMudHJlZU1vZGVsLnNldERhdGEoe1xyXG4gICAgICBvcHRpb25zOiBjaGFuZ2VzLm9wdGlvbnMgJiYgY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZSxcclxuICAgICAgbm9kZXM6IGNoYW5nZXMubm9kZXMgJiYgY2hhbmdlcy5ub2Rlcy5jdXJyZW50VmFsdWUsXHJcbiAgICAgIGV2ZW50czogcGljayh0aGlzLCB0aGlzLnRyZWVNb2RlbC5ldmVudE5hbWVzKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaXplQ2hhbmdlZCgpIHtcclxuICAgIHRoaXMudmlld3BvcnRDb21wb25lbnQuc2V0Vmlld3BvcnQoKTtcclxuICB9XHJcbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcclxuICBzZWxlY3RvcjogJ1RyZWUsIHRyZWUtcm9vdCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcm92aWRlcnM6IFtUcmVlTW9kZWxdLFxyXG4gIHN0eWxlczogW1xyXG4gICAgJy50cmVlLWNoaWxkcmVuIHsgcGFkZGluZy1sZWZ0OiAyMHB4IH0nLFxyXG4gICAgJy5lbXB0eS10cmVlLWRyb3Atc2xvdCAubm9kZS1kcm9wLXNsb3QgeyBoZWlnaHQ6IDIwcHg7IG1pbi13aWR0aDogMTAwcHggfScsXHJcbiAgICBgLnRyZWUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cclxuICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgICAvKiBDaHJvbWUvU2FmYXJpL09wZXJhICovXHJcbiAgICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgICAgLyogS29ucXVlcm9yICovXHJcbiAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgLyogRmlyZWZveCAqL1xyXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgIC8qIElFL0VkZ2UgKi9cclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgICAgICAvKiBub24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWQgYnkgYW55IGJyb3dzZXIgKi9cclxuICAgIH1gXHJcbiAgXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHRyZWUtdmlld3BvcnQgI3ZpZXdwb3J0PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJ0cmVlXCJcclxuICAgICAgICBbY2xhc3Mubm9kZS1kcmFnZ2luZ109XCJ0cmVlRHJhZ2dlZEVsZW1lbnQuaXNEcmFnZ2luZygpXCI+XHJcbiAgICAgICAgPHRyZWUtbm9kZS1jb2xsZWN0aW9uXHJcbiAgICAgICAgICAqbmdJZj1cInRyZWVNb2RlbC5yb290c1wiXHJcbiAgICAgICAgICBbbm9kZXNdPVwidHJlZU1vZGVsLnJvb3RzXCJcclxuICAgICAgICAgIFt0cmVlTW9kZWxdPVwidHJlZU1vZGVsXCJcclxuICAgICAgICAgIFt0ZW1wbGF0ZXNdPVwie1xyXG4gICAgICAgICAgICBsb2FkaW5nVGVtcGxhdGU6IGxvYWRpbmdUZW1wbGF0ZSxcclxuICAgICAgICAgICAgdHJlZU5vZGVUZW1wbGF0ZTogdHJlZU5vZGVUZW1wbGF0ZSxcclxuICAgICAgICAgICAgdHJlZU5vZGVXcmFwcGVyVGVtcGxhdGU6IHRyZWVOb2RlV3JhcHBlclRlbXBsYXRlLFxyXG4gICAgICAgICAgICB0cmVlTm9kZUZ1bGxUZW1wbGF0ZTogdHJlZU5vZGVGdWxsVGVtcGxhdGVcclxuICAgICAgICAgIH1cIj5cclxuICAgICAgICA8L3RyZWUtbm9kZS1jb2xsZWN0aW9uPlxyXG4gICAgICAgIDx0cmVlLW5vZGUtZHJvcC1zbG90XHJcbiAgICAgICAgICBjbGFzcz1cImVtcHR5LXRyZWUtZHJvcC1zbG90XCJcclxuICAgICAgICAgICpuZ0lmPVwidHJlZU1vZGVsLmlzRW1wdHlUcmVlKClcIlxyXG4gICAgICAgICAgW2Ryb3BJbmRleF09XCIwXCJcclxuICAgICAgICAgIFtub2RlXT1cInRyZWVNb2RlbC52aXJ0dWFsUm9vdFwiPlxyXG4gICAgICAgIDwvdHJlZS1ub2RlLWRyb3Atc2xvdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3RyZWUtdmlld3BvcnQ+XHJcbiAgYFxyXG59LCBdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IFRyZWVNb2RlbCwgfSxcbnt0eXBlOiBUcmVlRHJhZ2dlZEVsZW1lbnQsIH0sXG57dHlwZTogUmVuZGVyZXIsIH0sXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ2xvYWRpbmdUZW1wbGF0ZSc6IFt7IHR5cGU6IENvbnRlbnRDaGlsZCwgYXJnczogWydsb2FkaW5nVGVtcGxhdGUnLCBdIH0sXSxcbid0cmVlTm9kZVRlbXBsYXRlJzogW3sgdHlwZTogQ29udGVudENoaWxkLCBhcmdzOiBbJ3RyZWVOb2RlVGVtcGxhdGUnLCBdIH0sXSxcbid0cmVlTm9kZVdyYXBwZXJUZW1wbGF0ZSc6IFt7IHR5cGU6IENvbnRlbnRDaGlsZCwgYXJnczogWyd0cmVlTm9kZVdyYXBwZXJUZW1wbGF0ZScsIF0gfSxdLFxuJ3RyZWVOb2RlRnVsbFRlbXBsYXRlJzogW3sgdHlwZTogQ29udGVudENoaWxkLCBhcmdzOiBbJ3RyZWVOb2RlRnVsbFRlbXBsYXRlJywgXSB9LF0sXG4ndmlld3BvcnRDb21wb25lbnQnOiBbeyB0eXBlOiBWaWV3Q2hpbGQsIGFyZ3M6IFsndmlld3BvcnQnLCBdIH0sXSxcbidub2Rlcyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidvcHRpb25zJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2ZvY3VzZWQnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nb25Ub2dnbGVFeHBhbmRlZCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nb25BY3RpdmF0ZSc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nb25EZWFjdGl2YXRlJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidvbkZvY3VzJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidvbkJsdXInOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ29uVXBkYXRlRGF0YSc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nb25Jbml0aWFsaXplZCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nb25Nb3ZlTm9kZSc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nb25Mb2FkQ2hpbGRyZW4nOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ29uQ2hhbmdlRmlsdGVyJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidvbkV2ZW50JzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbid0b2dnbGVFeHBhbmRlZCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nYWN0aXZhdGUnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ2RlYWN0aXZhdGUnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ2ZvY3VzJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidibHVyJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbid1cGRhdGVEYXRhJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidpbml0aWFsaXplZCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nbW92ZU5vZGUnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ2xvYWRDaGlsZHJlbic6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nY2hhbmdlRmlsdGVyJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidldmVudCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nb25LZXlkb3duJzogW3sgdHlwZTogSG9zdExpc3RlbmVyLCBhcmdzOiBbJ2JvZHk6IGtleWRvd24nLCBbJyRldmVudCddLCBdIH0sXSxcbidvbk1vdXNlZG93bic6IFt7IHR5cGU6IEhvc3RMaXN0ZW5lciwgYXJnczogWydib2R5OiBtb3VzZWRvd24nLCBbJyRldmVudCddLCBdIH0sXSxcbn07XG59XHJcblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19