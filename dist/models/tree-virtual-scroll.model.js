var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { observable, computed, action, autorun, reaction } from 'mobx';
import { TreeModel } from './tree.model';
import { TREE_EVENTS } from '../constants/events';
var Y_OFFSET = 300; // Extra pixels outside the viewport, in each direction, to render nodes in
var Y_EPSILON = 50; // Minimum pixel change required to recalculate the rendered nodes
var TreeVirtualScroll = (function () {
    function TreeVirtualScroll(treeModel) {
        var _this = this;
        this.treeModel = treeModel;
        this.yBlocks = 0;
        this.x = 0;
        this.viewportHeight = null;
        this.viewport = null;
        treeModel.virtualScroll = this;
        this._dispose = [autorun(function () { return _this.fixScroll(); })];
    }
    Object.defineProperty(TreeVirtualScroll.prototype, "y", {
        get: function () {
            return this.yBlocks * Y_EPSILON;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeVirtualScroll.prototype, "totalHeight", {
        get: function () {
            return this.treeModel.virtualRoot ? this.treeModel.virtualRoot.height : 0;
        },
        enumerable: true,
        configurable: true
    });
    TreeVirtualScroll.prototype.fireEvent = function (event) {
        this.treeModel.fireEvent(event);
    };
    TreeVirtualScroll.prototype.init = function () {
        var _this = this;
        var fn = this.recalcPositions.bind(this);
        fn();
        this._dispose = this._dispose.concat([
            reaction(function () { return _this.treeModel.roots; }, fn),
            reaction(function () { return _this.treeModel.expandedNodeIds; }, fn),
            reaction(function () { return _this.treeModel.hiddenNodeIds; }, fn)
        ]);
        this.treeModel.subscribe(TREE_EVENTS.onLoadChildren, fn);
    };
    TreeVirtualScroll.prototype.isEnabled = function () {
        return this.treeModel.options.useVirtualScroll;
    };
    TreeVirtualScroll.prototype._setYBlocks = function (value) {
        this.yBlocks = value;
    };
    TreeVirtualScroll.prototype.recalcPositions = function () {
        this.treeModel.virtualRoot.height = this._getPositionAfter(this.treeModel.getVisibleRoots(), 0);
    };
    TreeVirtualScroll.prototype._getPositionAfter = function (nodes, startPos) {
        var _this = this;
        var position = startPos;
        nodes.forEach(function (node) {
            node.position = position;
            position = _this._getPositionAfterNode(node, position);
        });
        return position;
    };
    TreeVirtualScroll.prototype._getPositionAfterNode = function (node, startPos) {
        var position = node.getSelfHeight() + startPos;
        if (node.children && node.isExpanded) {
            position = this._getPositionAfter(node.visibleChildren, position);
        }
        node.height = position - startPos;
        return position;
    };
    TreeVirtualScroll.prototype.clear = function () {
        this._dispose.forEach(function (d) { return d(); });
    };
    TreeVirtualScroll.prototype.setViewport = function (viewport) {
        Object.assign(this, {
            viewport: viewport,
            x: viewport.scrollLeft,
            yBlocks: Math.round(viewport.scrollTop / Y_EPSILON),
            viewportHeight: viewport.getBoundingClientRect().height
        });
    };
    TreeVirtualScroll.prototype.scrollIntoView = function (node, force, scrollToMiddle) {
        if (scrollToMiddle === void 0) { scrollToMiddle = true; }
        if (force ||
            node.position < this.y ||
            node.position + node.getSelfHeight() > this.y + this.viewportHeight) {
            this.viewport.scrollTop = scrollToMiddle ?
                node.position - this.viewportHeight / 2 :
                node.position; // scroll to start
            this._setYBlocks(Math.floor(this.viewport.scrollTop / Y_EPSILON));
        }
    };
    TreeVirtualScroll.prototype.getViewportNodes = function (nodes) {
        var _this = this;
        if (!nodes)
            return [];
        var visibleNodes = nodes.filter(function (node) { return !node.isHidden; });
        if (!this.isEnabled())
            return visibleNodes;
        if (!this.viewportHeight || !visibleNodes.length)
            return [];
        // Search for first node in the viewport using binary search
        // Look for first node that starts after the beginning of the viewport (with buffer)
        // Or that ends after the beginning of the viewport
        var firstIndex = binarySearch(visibleNodes, function (node) {
            return (node.position + Y_OFFSET > _this.y) ||
                (node.position + node.height > _this.y);
        });
        // Search for last node in the viewport using binary search
        // Look for first node that starts after the end of the viewport (with buffer)
        var lastIndex = binarySearch(visibleNodes, function (node) {
            return node.position - Y_OFFSET > _this.y + _this.viewportHeight;
        }, firstIndex);
        var viewportNodes = [];
        for (var i = firstIndex; i <= lastIndex; i++) {
            viewportNodes.push(visibleNodes[i]);
        }
        return viewportNodes;
    };
    TreeVirtualScroll.prototype.fixScroll = function () {
        var maxY = Math.max(0, this.totalHeight - this.viewportHeight);
        if (this.y < 0)
            this._setYBlocks(0);
        if (this.y > maxY)
            this._setYBlocks(maxY / Y_EPSILON);
    };
    return TreeVirtualScroll;
}());
export { TreeVirtualScroll };
TreeVirtualScroll.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TreeVirtualScroll.ctorParameters = function () { return [
    { type: TreeModel, },
]; };
__decorate([
    observable,
    __metadata("design:type", Object)
], TreeVirtualScroll.prototype, "yBlocks", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], TreeVirtualScroll.prototype, "x", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], TreeVirtualScroll.prototype, "viewportHeight", void 0);
__decorate([
    computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeVirtualScroll.prototype, "y", null);
__decorate([
    computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeVirtualScroll.prototype, "totalHeight", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TreeVirtualScroll.prototype, "_setYBlocks", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TreeVirtualScroll.prototype, "recalcPositions", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TreeVirtualScroll.prototype, "setViewport", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], TreeVirtualScroll.prototype, "scrollIntoView", null);
function binarySearch(nodes, condition, firstIndex) {
    if (firstIndex === void 0) { firstIndex = 0; }
    var index = firstIndex;
    var toIndex = nodes.length - 1;
    while (index !== toIndex) {
        var midIndex = Math.floor((index + toIndex) / 2);
        if (condition(nodes[midIndex])) {
            toIndex = midIndex;
        }
        else {
            if (index === midIndex)
                index = toIndex;
            else
                index = midIndex;
        }
    }
    return index;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9tb2RlbHMvdHJlZS12aXJ0dWFsLXNjcm9sbC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBQSxFQUFXLE1BQU8sZUFBQSxDQUFnQjtBQUMzQyxPQUFPLEVBQUUsVUFBQSxFQUFZLFFBQUEsRUFBVSxNQUFBLEVBQVEsT0FBQSxFQUFTLFFBQUEsRUFBUyxNQUFPLE1BQUEsQ0FBTztBQUN2RSxPQUFPLEVBQUUsU0FBQSxFQUFVLE1BQU8sY0FBQSxDQUFlO0FBQ3pDLE9BQU8sRUFBRSxXQUFBLEVBQVksTUFBTyxxQkFBQSxDQUFzQjtBQUVsRCxJQUFNLFFBQUEsR0FBVyxHQUFBLENBQUksQ0FBQywyRUFBQTtBQUN0QixJQUFNLFNBQUEsR0FBWSxFQUFBLENBQUcsQ0FBQSxrRUFBQTtBQUdyQjtJQWdCRSwyQkFBb0IsU0FBb0I7UUFBeEMsaUJBR0M7UUFIbUIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQWI1QixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osTUFBQyxHQUFHLENBQUMsQ0FBQztRQUNOLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFXZCxTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsU0FBUyxFQUFFLEVBQWhCLENBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFYUyxzQkFBSSxnQ0FBQzthQUFMO1lBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRVMsc0JBQUksMENBQVc7YUFBZjtZQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FB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RSxDQUFDLENBQUMsS0FQQyxLQUFTLFFBQUEsQ0FBUztnQkFBQyxLQUFBLEdBQVEsT0FBQSxDQUFRO1lBUXhDLElBQUk7Z0JBUEMsS0FBQSxHQUFRLFFBQUEsQ0FBUztRQVF4QixDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU0sQ0FQQyxLQUFBLENBQU07QUFRZixDQUFDIiwiZmlsZSI6InRyZWUtdmlydHVhbC1zY3JvbGwubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCwgYWN0aW9uLCBhdXRvcnVuLCByZWFjdGlvbiB9IGZyb20gJ21vYngnO1xyXG5pbXBvcnQgeyBUcmVlTW9kZWwgfSBmcm9tICcuL3RyZWUubW9kZWwnO1xyXG5pbXBvcnQgeyBUUkVFX0VWRU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9ldmVudHMnO1xyXG5cclxuY29uc3QgWV9PRkZTRVQgPSAzMDA7IC8vIEV4dHJhIHBpeGVscyBvdXRzaWRlIHRoZSB2aWV3cG9ydCwgaW4gZWFjaCBkaXJlY3Rpb24sIHRvIHJlbmRlciBub2RlcyBpblxyXG5jb25zdCBZX0VQU0lMT04gPSA1MDsgLy8gTWluaW11bSBwaXhlbCBjaGFuZ2UgcmVxdWlyZWQgdG8gcmVjYWxjdWxhdGUgdGhlIHJlbmRlcmVkIG5vZGVzXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVWaXJ0dWFsU2Nyb2xsIHtcclxuICBwcml2YXRlIF9kaXNwb3NlOiBhbnk7XHJcblxyXG4gIEBvYnNlcnZhYmxlIHlCbG9ja3MgPSAwO1xyXG4gIEBvYnNlcnZhYmxlIHggPSAwO1xyXG4gIEBvYnNlcnZhYmxlIHZpZXdwb3J0SGVpZ2h0ID0gbnVsbDtcclxuICB2aWV3cG9ydCA9IG51bGw7XHJcblxyXG4gIEBjb21wdXRlZCBnZXQgeSgpIHtcclxuICAgIHJldHVybiB0aGlzLnlCbG9ja3MgKiBZX0VQU0lMT047XHJcbiAgfVxyXG5cclxuICBAY29tcHV0ZWQgZ2V0IHRvdGFsSGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMudHJlZU1vZGVsLnZpcnR1YWxSb290ID8gdGhpcy50cmVlTW9kZWwudmlydHVhbFJvb3QuaGVpZ2h0IDogMDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJlZU1vZGVsOiBUcmVlTW9kZWwpIHtcclxuICAgIHRyZWVNb2RlbC52aXJ0dWFsU2Nyb2xsID0gdGhpcztcclxuICAgIHRoaXMuX2Rpc3Bvc2UgPSBbYXV0b3J1bigoKSA9PiB0aGlzLmZpeFNjcm9sbCgpKV07XHJcbiAgfVxyXG5cclxuICBmaXJlRXZlbnQoZXZlbnQpIHtcclxuICAgIHRoaXMudHJlZU1vZGVsLmZpcmVFdmVudChldmVudCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgY29uc3QgZm4gPSB0aGlzLnJlY2FsY1Bvc2l0aW9ucy5iaW5kKHRoaXMpO1xyXG5cclxuICAgIGZuKCk7XHJcbiAgICB0aGlzLl9kaXNwb3NlID0gW1xyXG4gICAgICAuLi50aGlzLl9kaXNwb3NlLFxyXG4gICAgICByZWFjdGlvbigoKSA9PiB0aGlzLnRyZWVNb2RlbC5yb290cywgZm4pLFxyXG4gICAgICByZWFjdGlvbigoKSA9PiB0aGlzLnRyZWVNb2RlbC5leHBhbmRlZE5vZGVJZHMsIGZuKSxcclxuICAgICAgcmVhY3Rpb24oKCkgPT4gdGhpcy50cmVlTW9kZWwuaGlkZGVuTm9kZUlkcywgZm4pXHJcbiAgICBdO1xyXG4gICAgdGhpcy50cmVlTW9kZWwuc3Vic2NyaWJlKFRSRUVfRVZFTlRTLm9uTG9hZENoaWxkcmVuLCBmbik7XHJcbiAgfVxyXG5cclxuICBpc0VuYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50cmVlTW9kZWwub3B0aW9ucy51c2VWaXJ0dWFsU2Nyb2xsO1xyXG4gIH1cclxuXHJcbiAgQGFjdGlvbiBwcml2YXRlIF9zZXRZQmxvY2tzKHZhbHVlKSB7XHJcbiAgICB0aGlzLnlCbG9ja3MgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBhY3Rpb24gcmVjYWxjUG9zaXRpb25zKCkge1xyXG4gICAgdGhpcy50cmVlTW9kZWwudmlydHVhbFJvb3QuaGVpZ2h0ID0gdGhpcy5fZ2V0UG9zaXRpb25BZnRlcih0aGlzLnRyZWVNb2RlbC5nZXRWaXNpYmxlUm9vdHMoKSwgMCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRQb3NpdGlvbkFmdGVyKG5vZGVzLCBzdGFydFBvcykge1xyXG4gICAgbGV0IHBvc2l0aW9uID0gc3RhcnRQb3M7XHJcblxyXG4gICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICBub2RlLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgIHBvc2l0aW9uID0gdGhpcy5fZ2V0UG9zaXRpb25BZnRlck5vZGUobm9kZSwgcG9zaXRpb24pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcG9zaXRpb247XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRQb3NpdGlvbkFmdGVyTm9kZShub2RlLCBzdGFydFBvcykge1xyXG4gICAgbGV0IHBvc2l0aW9uID0gbm9kZS5nZXRTZWxmSGVpZ2h0KCkgKyBzdGFydFBvcztcclxuXHJcbiAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiBub2RlLmlzRXhwYW5kZWQpIHsgLy8gVEJEOiBjb25zaWRlciBsb2FkaW5nIGNvbXBvbmVudCBhcyB3ZWxsXHJcbiAgICAgIHBvc2l0aW9uID0gdGhpcy5fZ2V0UG9zaXRpb25BZnRlcihub2RlLnZpc2libGVDaGlsZHJlbiwgcG9zaXRpb24pO1xyXG4gICAgfVxyXG4gICAgbm9kZS5oZWlnaHQgPSBwb3NpdGlvbiAtIHN0YXJ0UG9zO1xyXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xyXG4gIH1cclxuXHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5fZGlzcG9zZS5mb3JFYWNoKChkKSA9PiBkKCkpO1xyXG4gIH1cclxuXHJcbiAgQGFjdGlvbiBzZXRWaWV3cG9ydCh2aWV3cG9ydCkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XHJcbiAgICAgIHZpZXdwb3J0LFxyXG4gICAgICB4OiB2aWV3cG9ydC5zY3JvbGxMZWZ0LFxyXG4gICAgICB5QmxvY2tzOiBNYXRoLnJvdW5kKHZpZXdwb3J0LnNjcm9sbFRvcCAvIFlfRVBTSUxPTiksXHJcbiAgICAgIHZpZXdwb3J0SGVpZ2h0OiB2aWV3cG9ydC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgQGFjdGlvbiBzY3JvbGxJbnRvVmlldyhub2RlLCBmb3JjZSwgc2Nyb2xsVG9NaWRkbGUgPSB0cnVlKSB7XHJcbiAgICBpZiAoZm9yY2UgfHwgLy8gZm9yY2Ugc2Nyb2xsIHRvIG5vZGVcclxuICAgICAgbm9kZS5wb3NpdGlvbiA8IHRoaXMueSB8fCAvLyBub2RlIGlzIGFib3ZlIHZpZXdwb3J0XHJcbiAgICAgIG5vZGUucG9zaXRpb24gKyBub2RlLmdldFNlbGZIZWlnaHQoKSA+IHRoaXMueSArIHRoaXMudmlld3BvcnRIZWlnaHQpIHsgLy8gbm9kZSBpcyBiZWxvdyB2aWV3cG9ydFxyXG4gICAgICB0aGlzLnZpZXdwb3J0LnNjcm9sbFRvcCA9IHNjcm9sbFRvTWlkZGxlID9cclxuICAgICAgICBub2RlLnBvc2l0aW9uIC0gdGhpcy52aWV3cG9ydEhlaWdodCAvIDIgOiAvLyBzY3JvbGwgdG8gbWlkZGxlXHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbjsgLy8gc2Nyb2xsIHRvIHN0YXJ0XHJcblxyXG4gICAgICB0aGlzLl9zZXRZQmxvY2tzKE1hdGguZmxvb3IodGhpcy52aWV3cG9ydC5zY3JvbGxUb3AgLyBZX0VQU0lMT04pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFZpZXdwb3J0Tm9kZXMobm9kZXMpIHtcclxuICAgIGlmICghbm9kZXMpIHJldHVybiBbXTtcclxuXHJcbiAgICBjb25zdCB2aXNpYmxlTm9kZXMgPSBub2Rlcy5maWx0ZXIoKG5vZGUpID0+ICFub2RlLmlzSGlkZGVuKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaXNFbmFibGVkKCkpIHJldHVybiB2aXNpYmxlTm9kZXM7XHJcblxyXG4gICAgaWYgKCF0aGlzLnZpZXdwb3J0SGVpZ2h0IHx8ICF2aXNpYmxlTm9kZXMubGVuZ3RoKSByZXR1cm4gW107XHJcblxyXG4gICAgLy8gU2VhcmNoIGZvciBmaXJzdCBub2RlIGluIHRoZSB2aWV3cG9ydCB1c2luZyBiaW5hcnkgc2VhcmNoXHJcbiAgICAvLyBMb29rIGZvciBmaXJzdCBub2RlIHRoYXQgc3RhcnRzIGFmdGVyIHRoZSBiZWdpbm5pbmcgb2YgdGhlIHZpZXdwb3J0ICh3aXRoIGJ1ZmZlcilcclxuICAgIC8vIE9yIHRoYXQgZW5kcyBhZnRlciB0aGUgYmVnaW5uaW5nIG9mIHRoZSB2aWV3cG9ydFxyXG4gICAgY29uc3QgZmlyc3RJbmRleCA9IGJpbmFyeVNlYXJjaCh2aXNpYmxlTm9kZXMsIChub2RlKSA9PiB7XHJcbiAgICAgIHJldHVybiAobm9kZS5wb3NpdGlvbiArIFlfT0ZGU0VUID4gdGhpcy55KSB8fFxyXG4gICAgICAgICAgICAgKG5vZGUucG9zaXRpb24gKyBub2RlLmhlaWdodCA+IHRoaXMueSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTZWFyY2ggZm9yIGxhc3Qgbm9kZSBpbiB0aGUgdmlld3BvcnQgdXNpbmcgYmluYXJ5IHNlYXJjaFxyXG4gICAgLy8gTG9vayBmb3IgZmlyc3Qgbm9kZSB0aGF0IHN0YXJ0cyBhZnRlciB0aGUgZW5kIG9mIHRoZSB2aWV3cG9ydCAod2l0aCBidWZmZXIpXHJcbiAgICBjb25zdCBsYXN0SW5kZXggPSBiaW5hcnlTZWFyY2godmlzaWJsZU5vZGVzLCAobm9kZSkgPT4ge1xyXG4gICAgICByZXR1cm4gbm9kZS5wb3NpdGlvbiAtIFlfT0ZGU0VUID4gdGhpcy55ICsgdGhpcy52aWV3cG9ydEhlaWdodDtcclxuICAgIH0sIGZpcnN0SW5kZXgpO1xyXG5cclxuICAgIGNvbnN0IHZpZXdwb3J0Tm9kZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSBmaXJzdEluZGV4OyBpIDw9IGxhc3RJbmRleDsgaSsrKSB7XHJcbiAgICAgIHZpZXdwb3J0Tm9kZXMucHVzaCh2aXNpYmxlTm9kZXNbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2aWV3cG9ydE5vZGVzO1xyXG4gIH1cclxuXHJcbiAgZml4U2Nyb2xsKCkge1xyXG4gICAgY29uc3QgbWF4WSA9IE1hdGgubWF4KDAsIHRoaXMudG90YWxIZWlnaHQgLSB0aGlzLnZpZXdwb3J0SGVpZ2h0KTtcclxuXHJcbiAgICBpZiAodGhpcy55IDwgMCkgdGhpcy5fc2V0WUJsb2NrcygwKTtcclxuICAgIGlmICh0aGlzLnkgPiBtYXhZKSB0aGlzLl9zZXRZQmxvY2tzKG1heFkgLyBZX0VQU0lMT04pO1xyXG4gIH1cclxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogSW5qZWN0YWJsZSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBUcmVlTW9kZWwsIH0sXG5dO1xufVxyXG5cclxuZnVuY3Rpb24gYmluYXJ5U2VhcmNoKG5vZGVzLCBjb25kaXRpb24sIGZpcnN0SW5kZXggPSAwKSB7XHJcbiAgbGV0IGluZGV4ID0gZmlyc3RJbmRleDtcclxuICBsZXQgdG9JbmRleCA9IG5vZGVzLmxlbmd0aCAtIDE7XHJcblxyXG4gIHdoaWxlIChpbmRleCAhPT0gdG9JbmRleCkge1xyXG4gICAgbGV0IG1pZEluZGV4ID0gTWF0aC5mbG9vcigoaW5kZXggKyB0b0luZGV4KSAvIDIpO1xyXG5cclxuICAgIGlmIChjb25kaXRpb24obm9kZXNbbWlkSW5kZXhdKSkge1xyXG4gICAgICB0b0luZGV4ID0gbWlkSW5kZXg7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKGluZGV4ID09PSBtaWRJbmRleCkgaW5kZXggPSB0b0luZGV4O1xyXG4gICAgICBlbHNlIGluZGV4ID0gbWlkSW5kZXg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBpbmRleDtcclxufVxyXG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==