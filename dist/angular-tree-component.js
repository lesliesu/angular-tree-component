import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobxAngularModule } from 'mobx-angular';
import { TREE_ACTIONS } from './models/tree-options.model';
import { KEYS } from './constants/keys';
import { TreeModel } from './models/tree.model';
import { TreeNode } from './models/tree-node.model';
import { TreeDraggedElement } from './models/tree-dragged-element.model';
import { TreeVirtualScroll } from './models/tree-virtual-scroll.model';
import { LoadingComponent } from './components/loading.component';
import { TreeComponent } from './components/tree.component';
import { TreeNodeComponent } from './components/tree-node.component';
import { TreeNodeContent } from './components/tree-node-content.component';
import { TreeNodeDropSlot } from './components/tree-node-drop-slot.component';
import { TreeNodeExpanderComponent } from './components/tree-node-expander.component';
import { TreeNodeChildrenComponent } from './components/tree-node-children.component';
import { TreeNodeCollectionComponent } from './components/tree-node-collection.component';
import { TreeNodeWrapperComponent } from './components/tree-node-wrapper.component';
import { TreeViewportComponent } from './components/tree-viewport.component';
import { TreeDropDirective } from './directives/tree-drop.directive';
import { TreeDragDirective } from './directives/tree-drag.directive';
import { TreeAnimateOpenDirective } from './directives/tree-animate-open.directive';
import './polyfills';
export { TreeModel, TreeNode, TreeDraggedElement, TreeVirtualScroll, TREE_ACTIONS, KEYS, LoadingComponent, TreeComponent, TreeNodeComponent, TreeNodeContent, TreeDropDirective, TreeDragDirective, TreeNodeExpanderComponent, TreeNodeChildrenComponent, TreeNodeDropSlot, TreeNodeCollectionComponent, TreeViewportComponent };
var TreeModule = (function () {
    function TreeModule() {
    }
    return TreeModule;
}());
export { TreeModule };
TreeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    TreeComponent,
                    TreeNodeComponent,
                    TreeNodeContent,
                    LoadingComponent,
                    TreeDropDirective,
                    TreeDragDirective,
                    TreeNodeExpanderComponent,
                    TreeNodeChildrenComponent,
                    TreeNodeDropSlot,
                    TreeNodeCollectionComponent,
                    TreeViewportComponent,
                    TreeNodeWrapperComponent,
                    TreeAnimateOpenDirective
                ],
                exports: [
                    TreeComponent,
                    TreeNodeComponent,
                    TreeNodeContent,
                    LoadingComponent,
                    TreeDropDirective,
                    TreeDragDirective,
                    TreeNodeExpanderComponent,
                    TreeNodeChildrenComponent,
                    TreeNodeDropSlot,
                    TreeNodeCollectionComponent,
                    TreeViewportComponent,
                    TreeNodeWrapperComponent,
                    TreeAnimateOpenDirective
                ],
                imports: [
                    CommonModule,
                    MobxAngularModule
                ],
                providers: [
                    TreeDraggedElement
                ]
            },] },
];
/** @nocollapse */
TreeModule.ctorParameters = function () { return []; };
export default TreeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9hbmd1bGFyLXRyZWUtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFBLEVBQVMsTUFBWSxlQUFBLENBQWdCO0FBQzlDLE9BQU8sRUFBRSxZQUFBLEVBQWEsTUFBTyxpQkFBQSxDQUFrQjtBQUMvQyxPQUFPLEVBQUUsaUJBQUEsRUFBa0IsTUFBTyxjQUFBLENBQWU7QUFFakQsT0FBTyxFQUFFLFlBQUEsRUFBNkMsTUFBTyw2QkFBQSxDQUE4QjtBQUUzRixPQUFPLEVBQUUsSUFBQSxFQUFLLE1BQU8sa0JBQUEsQ0FBbUI7QUFDeEMsT0FBTyxFQUFFLFNBQUEsRUFBVSxNQUFPLHFCQUFBLENBQXNCO0FBQ2hELE9BQU8sRUFBRSxRQUFBLEVBQVMsTUFBTywwQkFBQSxDQUEyQjtBQUNwRCxPQUFPLEVBQUUsa0JBQUEsRUFBbUIsTUFBTyxxQ0FBQSxDQUFzQztBQUN6RSxPQUFPLEVBQUUsaUJBQUEsRUFBa0IsTUFBTyxvQ0FBQSxDQUFxQztBQUN2RSxPQUFPLEVBQUUsZ0JBQUEsRUFBaUIsTUFBTyxnQ0FBQSxDQUFpQztBQUNsRSxPQUFPLEVBQUUsYUFBQSxFQUFjLE1BQU8sNkJBQUEsQ0FBOEI7QUFDNUQsT0FBTyxFQUFFLGlCQUFBLEVBQWtCLE1BQU8sa0NBQUEsQ0FBbUM7QUFDckUsT0FBTyxFQUFFLGVBQUEsRUFBZ0IsTUFBTywwQ0FBQSxDQUEyQztBQUMzRSxPQUFPLEVBQUUsZ0JBQUEsRUFBaUIsTUFBTyw0Q0FBQSxDQUE2QztBQUM5RSxPQUFPLEVBQUUseUJBQUEsRUFBMEIsTUFBTywyQ0FBQSxDQUE0QztBQUN0RixPQUFPLEVBQUUseUJBQUEsRUFBMEIsTUFBTywyQ0FBQSxDQUE0QztBQUN0RixPQUFPLEVBQUUsMkJBQUEsRUFBNEIsTUFBTyw2Q0FBQSxDQUE4QztBQUMxRixPQUFPLEVBQUUsd0JBQUEsRUFBeUIsTUFBTywwQ0FBQSxDQUEyQztBQUNwRixPQUFPLEVBQUUscUJBQUEsRUFBc0IsTUFBTyxzQ0FBQSxDQUF1QztBQUM3RSxPQUFPLEVBQUUsaUJBQUEsRUFBa0IsTUFBTyxrQ0FBQSxDQUFtQztBQUNyRSxPQUFPLEVBQUUsaUJBQUEsRUFBa0IsTUFBTyxrQ0FBQSxDQUFtQztBQUNyRSxPQUFPLEVBQUUsd0JBQUEsRUFBeUIsTUFBTywwQ0FBQSxDQUEyQztBQUVwRixPQUFPLGFBQUEsQ0FBYztBQUVyQixPQUFPLEVBQ0wsU0FBUyxFQUNULFFBQVEsRUFDUixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBRWpCLFlBQVksRUFDWixJQUFJLEVBS0osZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixpQkFBaUIsRUFDakIsZUFBZSxFQUNmLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIseUJBQXlCLEVBQ3pCLHlCQUF5QixFQUN6QixnQkFBZ0IsRUFDaEIsMkJBQTJCLEVBQzNCLHFCQUFxQixFQUN0QixDQUFDO0FBR0Y7SUFBQTtJQTRDQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQTVDQSxBQTRDQzs7QUE1QytCLHFCQUFVLEdBQTBCO0lBQ3BFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDdkIsWUFBWSxFQUFFO29CQUNaLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLHlCQUF5QjtvQkFDekIseUJBQXlCO29CQUN6QixnQkFBZ0I7b0JBQ2hCLDJCQUEyQjtvQkFDM0IscUJBQXFCO29CQUNyQix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLHlCQUF5QjtvQkFDekIseUJBQXlCO29CQUN6QixnQkFBZ0I7b0JBQ2hCLDJCQUEyQjtvQkFDM0IscUJBQXFCO29CQUNyQix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osaUJBQWlCO2lCQUNsQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Qsa0JBQWtCO2lCQUNuQjthQUNGLEVBQUcsRUFBRTtDQUNMLENBQUM7QUFDRixrQkFBa0I7QUFDWCx5QkFBYyxHQUFtRSxjQUFNLE9BQUEsRUFDN0YsRUFENkYsQ0FDN0YsQ0FBQztBQUdGLGVBTmUsVUFBQSxDQUFXIiwiZmlsZSI6ImFuZ3VsYXItdHJlZS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNb2J4QW5ndWxhck1vZHVsZSB9IGZyb20gJ21vYngtYW5ndWxhcic7XHJcblxyXG5pbXBvcnQgeyBUUkVFX0FDVElPTlMsIElBY3Rpb25NYXBwaW5nLCBJQWN0aW9uSGFuZGxlciB9IGZyb20gJy4vbW9kZWxzL3RyZWUtb3B0aW9ucy5tb2RlbCc7XHJcbmltcG9ydCB7IElUcmVlT3B0aW9ucywgSUFsbG93RHJvcEZuLCBJQWxsb3dEcmFnRm4gfSBmcm9tICcuL2RlZnMvYXBpJztcclxuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4vY29uc3RhbnRzL2tleXMnO1xyXG5pbXBvcnQgeyBUcmVlTW9kZWwgfSBmcm9tICcuL21vZGVscy90cmVlLm1vZGVsJztcclxuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuL21vZGVscy90cmVlLW5vZGUubW9kZWwnO1xyXG5pbXBvcnQgeyBUcmVlRHJhZ2dlZEVsZW1lbnQgfSBmcm9tICcuL21vZGVscy90cmVlLWRyYWdnZWQtZWxlbWVudC5tb2RlbCc7XHJcbmltcG9ydCB7IFRyZWVWaXJ0dWFsU2Nyb2xsIH0gZnJvbSAnLi9tb2RlbHMvdHJlZS12aXJ0dWFsLXNjcm9sbC5tb2RlbCc7XHJcbmltcG9ydCB7IExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9hZGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJlZU5vZGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJlZS1ub2RlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRyZWVOb2RlQ29udGVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmVlLW5vZGUtY29udGVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmVlTm9kZURyb3BTbG90IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1kcm9wLXNsb3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJlZU5vZGVFeHBhbmRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmVlLW5vZGUtZXhwYW5kZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJlZU5vZGVDaGlsZHJlbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmVlLW5vZGUtY2hpbGRyZW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJlZU5vZGVDb2xsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1jb2xsZWN0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRyZWVOb2RlV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmVlLW5vZGUtd3JhcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmVlVmlld3BvcnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJlZS12aWV3cG9ydC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmVlRHJvcERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy90cmVlLWRyb3AuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVHJlZURyYWdEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdHJlZS1kcmFnLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFRyZWVBbmltYXRlT3BlbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy90cmVlLWFuaW1hdGUtb3Blbi5kaXJlY3RpdmUnO1xyXG5cclxuaW1wb3J0ICcuL3BvbHlmaWxscyc7XHJcblxyXG5leHBvcnQge1xyXG4gIFRyZWVNb2RlbCxcclxuICBUcmVlTm9kZSxcclxuICBUcmVlRHJhZ2dlZEVsZW1lbnQsXHJcbiAgVHJlZVZpcnR1YWxTY3JvbGwsXHJcbiAgSVRyZWVPcHRpb25zLFxyXG4gIFRSRUVfQUNUSU9OUyxcclxuICBLRVlTLFxyXG4gIElBY3Rpb25NYXBwaW5nLFxyXG4gIElBY3Rpb25IYW5kbGVyLFxyXG4gIElBbGxvd0Ryb3BGbixcclxuICBJQWxsb3dEcmFnRm4sXHJcbiAgTG9hZGluZ0NvbXBvbmVudCxcclxuICBUcmVlQ29tcG9uZW50LFxyXG4gIFRyZWVOb2RlQ29tcG9uZW50LFxyXG4gIFRyZWVOb2RlQ29udGVudCxcclxuICBUcmVlRHJvcERpcmVjdGl2ZSxcclxuICBUcmVlRHJhZ0RpcmVjdGl2ZSxcclxuICBUcmVlTm9kZUV4cGFuZGVyQ29tcG9uZW50LFxyXG4gIFRyZWVOb2RlQ2hpbGRyZW5Db21wb25lbnQsXHJcbiAgVHJlZU5vZGVEcm9wU2xvdCxcclxuICBUcmVlTm9kZUNvbGxlY3Rpb25Db21wb25lbnQsXHJcbiAgVHJlZVZpZXdwb3J0Q29tcG9uZW50XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVNb2R1bGUge3N0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgVHJlZUNvbXBvbmVudCxcclxuICAgIFRyZWVOb2RlQ29tcG9uZW50LFxyXG4gICAgVHJlZU5vZGVDb250ZW50LFxyXG4gICAgTG9hZGluZ0NvbXBvbmVudCxcclxuICAgIFRyZWVEcm9wRGlyZWN0aXZlLFxyXG4gICAgVHJlZURyYWdEaXJlY3RpdmUsXHJcbiAgICBUcmVlTm9kZUV4cGFuZGVyQ29tcG9uZW50LFxyXG4gICAgVHJlZU5vZGVDaGlsZHJlbkNvbXBvbmVudCxcclxuICAgIFRyZWVOb2RlRHJvcFNsb3QsXHJcbiAgICBUcmVlTm9kZUNvbGxlY3Rpb25Db21wb25lbnQsXHJcbiAgICBUcmVlVmlld3BvcnRDb21wb25lbnQsXHJcbiAgICBUcmVlTm9kZVdyYXBwZXJDb21wb25lbnQsXHJcbiAgICBUcmVlQW5pbWF0ZU9wZW5EaXJlY3RpdmVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFRyZWVDb21wb25lbnQsXHJcbiAgICBUcmVlTm9kZUNvbXBvbmVudCxcclxuICAgIFRyZWVOb2RlQ29udGVudCxcclxuICAgIExvYWRpbmdDb21wb25lbnQsXHJcbiAgICBUcmVlRHJvcERpcmVjdGl2ZSxcclxuICAgIFRyZWVEcmFnRGlyZWN0aXZlLFxyXG4gICAgVHJlZU5vZGVFeHBhbmRlckNvbXBvbmVudCxcclxuICAgIFRyZWVOb2RlQ2hpbGRyZW5Db21wb25lbnQsXHJcbiAgICBUcmVlTm9kZURyb3BTbG90LFxyXG4gICAgVHJlZU5vZGVDb2xsZWN0aW9uQ29tcG9uZW50LFxyXG4gICAgVHJlZVZpZXdwb3J0Q29tcG9uZW50LFxyXG4gICAgVHJlZU5vZGVXcmFwcGVyQ29tcG9uZW50LFxyXG4gICAgVHJlZUFuaW1hdGVPcGVuRGlyZWN0aXZlXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNb2J4QW5ndWxhck1vZHVsZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBUcmVlRHJhZ2dlZEVsZW1lbnRcclxuICBdXHJcbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJlZU1vZHVsZTtcclxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=