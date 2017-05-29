var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { reaction } from 'mobx';
import { observable, computed, action } from 'mobx-angular';
import { deprecatedSelector } from '../deprecated-selector';
var TreeNodeCollectionComponent = (function () {
    function TreeNodeCollectionComponent(elementRef) {
        this.elementRef = elementRef;
        this._dispose = [];
        deprecatedSelector('TreeNodeCollection', 'tree-node-collection', elementRef);
    }
    Object.defineProperty(TreeNodeCollectionComponent.prototype, "nodes", {
        get: function () { return this._nodes; },
        set: function (nodes) { this.setNodes(nodes); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNodeCollectionComponent.prototype, "marginTop", {
        get: function () {
            var firstNode = this.viewportNodes && this.viewportNodes.length && this.viewportNodes[0];
            var relativePosition = firstNode ? firstNode.position - firstNode.parent.position - firstNode.parent.getSelfHeight() : 0;
            return relativePosition + "px";
        },
        enumerable: true,
        configurable: true
    });
    TreeNodeCollectionComponent.prototype.setNodes = function (nodes) {
        this._nodes = nodes;
    };
    TreeNodeCollectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.virtualScroll = this.treeModel.virtualScroll;
        this._dispose = [
            // return node indexes so we can compare structurally,
            reaction(function () {
                return _this.virtualScroll.getViewportNodes(_this.nodes).map(function (n) { return n.index; });
            }, function (nodeIndexes) {
                _this.viewportNodes = nodeIndexes.map(function (i) { return _this.nodes[i]; });
            }, { compareStructural: true, fireImmediately: true }),
            reaction(function () { return _this.nodes; }, function (nodes) {
                _this.viewportNodes = _this.virtualScroll.getViewportNodes(nodes);
            })
        ];
    };
    TreeNodeCollectionComponent.prototype.ngOnDestroy = function () {
        this._dispose.forEach(function (d) { return d(); });
    };
    TreeNodeCollectionComponent.prototype.trackNode = function (index, node) {
        return node.id;
    };
    return TreeNodeCollectionComponent;
}());
export { TreeNodeCollectionComponent };
TreeNodeCollectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'tree-node-collection, TreeNodeCollection',
                encapsulation: ViewEncapsulation.None,
                template: "\n    <ng-container *mobxAutorun>\n      <div\n        [style.margin-top]=\"marginTop\">\n        <tree-node\n          *ngFor=\"let node of viewportNodes; let i = index; trackBy: trackNode\"\n          [node]=\"node\"\n          [index]=\"i\"\n          [templates]=\"templates\">\n        </tree-node>\n      </div>\n    </ng-container>\n  "
            },] },
];
/** @nocollapse */
TreeNodeCollectionComponent.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
TreeNodeCollectionComponent.propDecorators = {
    'nodes': [{ type: Input },],
    'treeModel': [{ type: Input },],
    'templates': [{ type: Input },],
};
__decorate([
    observable,
    __metadata("design:type", Object)
], TreeNodeCollectionComponent.prototype, "_nodes", void 0);
__decorate([
    observable,
    __metadata("design:type", Array)
], TreeNodeCollectionComponent.prototype, "viewportNodes", void 0);
__decorate([
    computed,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], TreeNodeCollectionComponent.prototype, "marginTop", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TreeNodeCollectionComponent.prototype, "setNodes", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS1jb2xsZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUEsRUFBTyxpQkFBQSxFQUFzQyxVQUFBLEVBQ3pELE1BQU0sZUFBQSxDQUFnQjtBQUN2QixPQUFPLEVBQUUsUUFBQSxFQUFrQixNQUFPLE1BQUEsQ0FBTztBQUN6QyxPQUFPLEVBQUUsVUFBQSxFQUFZLFFBQUEsRUFBVSxNQUFBLEVBQU8sTUFBTyxjQUFBLENBQWU7QUFJNUQsT0FBTyxFQUFFLGtCQUFBLEVBQW1CLE1BQU8sd0JBQUEsQ0FBeUI7QUFHNUQ7SUFzQkUscUNBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFGMUMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUdaLGtCQUFrQixDQUFDLG9CQUFvQixFQUFFLHNCQUFzQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUF0QkQsc0JBQUksOENBQUs7YUFBVCxjQUFjLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUNuQyxVQUFVLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BRFA7SUFXekIsc0JBQUksa0RBQVM7YUFBYjtZQUNSLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRixJQUFNLGdCQUFnQixHQUFHLFNBQVMsR0FBRyxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRTNILE1BQU0sQ0FBSSxnQkFBZ0IsT0FBSSxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBUU8sOENBQVEsR0FBUixVQUFTLEtBQUs7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELDhDQUFRLEdBQVI7UUFBQSxpQkFjQztRQWJDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLHNEQUFzRDtZQUN0RCxRQUFRLENBQUM7Z0JBQ1AsTUFBTSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLENBQUM7WUFDM0UsQ0FBQyxFQUFFLFVBQUMsV0FBVztnQkFDWCxLQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDO1lBQzdELENBQUMsRUFBRSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQ3REO1lBQ0QsUUFBUSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsRUFBRSxVQUFDLEtBQUs7Z0JBQy9CLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsRSxDQUFDLENBQUM7U0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELGlEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsRUFBRSxFQUFILENBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCwrQ0FBUyxHQUFULFVBQVUsS0FBSyxFQUFFLElBQUk7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQThCSCxrQ0FBQztBQUFELENBbEZBLEFBa0ZDOztBQTVCTSxzQ0FBVSxHQUEwQjtJQUMzQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLFFBQVEsRUFBRSwwQ0FBMEM7Z0JBQ3BELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsd1ZBWVQ7YUFDRixFQUFHLEVBQUU7Q0FDTCxDQUFDO0FBQ0Ysa0JBQWtCO0FBQ1gsMENBQWMsR0FBbUUsY0FBTSxPQUFBO0lBQzlGLEVBQUMsSUFBSSxFQUFFLFVBQVUsR0FBRztDQUNuQixFQUY2RixDQUU3RixDQUFDO0FBQ0ssMENBQWMsR0FBMkM7SUFDaEUsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7SUFDM0IsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7SUFDL0IsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7Q0FDOUIsQ0FBQztBQTFFWTtJQUFYLFVBQVU7OzJEQUFRO0FBSVA7SUFBWCxVQUFVOztrRUFBMkI7QUFFNUI7SUFBVCxRQUFROzs7NERBS1I7QUFRTztJQUFQLE1BQU07Ozs7MkRBRU4iLCJmaWxlIjoidHJlZS1ub2RlLWNvbGxlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uSW5pdCwgT25EZXN0cm95LCBFbGVtZW50UmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHJlYWN0aW9uLCBhdXRvcnVuIH0gZnJvbSAnbW9ieCc7XHJcbmltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkLCBhY3Rpb24gfSBmcm9tICdtb2J4LWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBUcmVlVmlydHVhbFNjcm9sbCB9IGZyb20gJy4uL21vZGVscy90cmVlLXZpcnR1YWwtc2Nyb2xsLm1vZGVsJztcclxuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1ub2RlLm1vZGVsJztcclxuaW1wb3J0IHsgVHJlZU1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUubW9kZWwnO1xyXG5pbXBvcnQgeyBkZXByZWNhdGVkU2VsZWN0b3IgfSBmcm9tICcuLi9kZXByZWNhdGVkLXNlbGVjdG9yJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVHJlZU5vZGVDb2xsZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIFxyXG4gIGdldCBub2RlcygpIHsgcmV0dXJuIHRoaXMuX25vZGVzOyB9XHJcbiAgc2V0IG5vZGVzKG5vZGVzKSB7IHRoaXMuc2V0Tm9kZXMobm9kZXMpOyB9XHJcblxyXG4gICB0cmVlTW9kZWw6IFRyZWVNb2RlbDtcclxuXHJcbiAgQG9ic2VydmFibGUgX25vZGVzO1xyXG4gIHByaXZhdGUgdmlydHVhbFNjcm9sbDogVHJlZVZpcnR1YWxTY3JvbGw7IC8vIENhbm5vdCBpbmplY3QgdGhpcywgYmVjYXVzZSB3ZSBtaWdodCBiZSBpbnNpZGUgdHJlZU5vZGVUZW1wbGF0ZUZ1bGxcclxuICAgdGVtcGxhdGVzO1xyXG5cclxuICBAb2JzZXJ2YWJsZSB2aWV3cG9ydE5vZGVzOiBUcmVlTm9kZVtdO1xyXG5cclxuICBAY29tcHV0ZWQgZ2V0IG1hcmdpblRvcCgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgZmlyc3ROb2RlID0gdGhpcy52aWV3cG9ydE5vZGVzICYmIHRoaXMudmlld3BvcnROb2Rlcy5sZW5ndGggJiYgdGhpcy52aWV3cG9ydE5vZGVzWzBdO1xyXG4gICAgY29uc3QgcmVsYXRpdmVQb3NpdGlvbiA9IGZpcnN0Tm9kZSA/IGZpcnN0Tm9kZS5wb3NpdGlvbiAtIGZpcnN0Tm9kZS5wYXJlbnQucG9zaXRpb24gLSBmaXJzdE5vZGUucGFyZW50LmdldFNlbGZIZWlnaHQoKSA6IDA7XHJcblxyXG4gICAgcmV0dXJuIGAke3JlbGF0aXZlUG9zaXRpb259cHhgO1xyXG4gIH1cclxuXHJcbiAgX2Rpc3Bvc2UgPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICBkZXByZWNhdGVkU2VsZWN0b3IoJ1RyZWVOb2RlQ29sbGVjdGlvbicsICd0cmVlLW5vZGUtY29sbGVjdGlvbicsIGVsZW1lbnRSZWYpO1xyXG4gIH1cclxuXHJcbiAgQGFjdGlvbiBzZXROb2Rlcyhub2Rlcykge1xyXG4gICAgdGhpcy5fbm9kZXMgPSBub2RlcztcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy52aXJ0dWFsU2Nyb2xsID0gdGhpcy50cmVlTW9kZWwudmlydHVhbFNjcm9sbDtcclxuICAgIHRoaXMuX2Rpc3Bvc2UgPSBbXHJcbiAgICAgIC8vIHJldHVybiBub2RlIGluZGV4ZXMgc28gd2UgY2FuIGNvbXBhcmUgc3RydWN0dXJhbGx5LFxyXG4gICAgICByZWFjdGlvbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlydHVhbFNjcm9sbC5nZXRWaWV3cG9ydE5vZGVzKHRoaXMubm9kZXMpLm1hcChuID0+IG4uaW5kZXgpO1xyXG4gICAgICB9LCAobm9kZUluZGV4ZXMpID0+IHtcclxuICAgICAgICAgIHRoaXMudmlld3BvcnROb2RlcyA9IG5vZGVJbmRleGVzLm1hcCgoaSkgPT4gdGhpcy5ub2Rlc1tpXSk7XHJcbiAgICAgICAgfSwgeyBjb21wYXJlU3RydWN0dXJhbDogdHJ1ZSwgZmlyZUltbWVkaWF0ZWx5OiB0cnVlIH1cclxuICAgICAgKSxcclxuICAgICAgcmVhY3Rpb24oKCkgPT4gdGhpcy5ub2RlcywgKG5vZGVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy52aWV3cG9ydE5vZGVzID0gdGhpcy52aXJ0dWFsU2Nyb2xsLmdldFZpZXdwb3J0Tm9kZXMobm9kZXMpO1xyXG4gICAgICB9KVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fZGlzcG9zZS5mb3JFYWNoKGQgPT4gZCgpKTtcclxuICB9XHJcblxyXG4gIHRyYWNrTm9kZShpbmRleCwgbm9kZSkge1xyXG4gICAgcmV0dXJuIG5vZGUuaWQ7XHJcbiAgfVxyXG5cclxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogQ29tcG9uZW50LCBhcmdzOiBbe1xyXG4gIHNlbGVjdG9yOiAndHJlZS1ub2RlLWNvbGxlY3Rpb24sIFRyZWVOb2RlQ29sbGVjdGlvbicsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbW9ieEF1dG9ydW4+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBbc3R5bGUubWFyZ2luLXRvcF09XCJtYXJnaW5Ub3BcIj5cclxuICAgICAgICA8dHJlZS1ub2RlXHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgbm9kZSBvZiB2aWV3cG9ydE5vZGVzOyBsZXQgaSA9IGluZGV4OyB0cmFja0J5OiB0cmFja05vZGVcIlxyXG4gICAgICAgICAgW25vZGVdPVwibm9kZVwiXHJcbiAgICAgICAgICBbaW5kZXhdPVwiaVwiXHJcbiAgICAgICAgICBbdGVtcGxhdGVzXT1cInRlbXBsYXRlc1wiPlxyXG4gICAgICAgIDwvdHJlZS1ub2RlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSwgXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBFbGVtZW50UmVmLCB9LFxuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nbm9kZXMnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4ndHJlZU1vZGVsJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ3RlbXBsYXRlcyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbn07XG59XHJcblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19