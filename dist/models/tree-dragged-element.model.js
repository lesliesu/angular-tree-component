import { Injectable } from '@angular/core';
var TreeDraggedElement = (function () {
    function TreeDraggedElement() {
        this._draggedElement = null;
    }
    TreeDraggedElement.prototype.set = function (draggedElement) {
        this._draggedElement = draggedElement;
    };
    TreeDraggedElement.prototype.get = function () {
        return this._draggedElement;
    };
    TreeDraggedElement.prototype.isDragging = function () {
        return !!this.get();
    };
    return TreeDraggedElement;
}());
export { TreeDraggedElement };
TreeDraggedElement.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TreeDraggedElement.ctorParameters = function () { return []; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9tb2RlbHMvdHJlZS1kcmFnZ2VkLWVsZW1lbnQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQUEsRUFBVyxNQUFPLGVBQUEsQ0FBZ0I7QUFHM0M7SUFBQTtRQUNFLG9CQUFlLEdBQVEsSUFBSSxDQUFDO0lBbUI5QixDQUFDO0lBakJDLGdDQUFHLEdBQUgsVUFBSSxjQUFtQjtRQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsZ0NBQUcsR0FBSDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCx1Q0FBVSxHQUFWO1FBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQU9ILHlCQUFDO0FBQUQsQ0FwQkEsQUFvQkM7O0FBTk0sNkJBQVUsR0FBMEI7SUFDM0MsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0NBQ25CLENBQUM7QUFDRixrQkFBa0I7QUFDWCxpQ0FBYyxHQUFtRSxjQUFNLE9BQUEsRUFDN0YsRUFENkYsQ0FDN0YsQ0FBQyIsImZpbGUiOiJ0cmVlLWRyYWdnZWQtZWxlbWVudC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWVEcmFnZ2VkRWxlbWVudCB7XHJcbiAgX2RyYWdnZWRFbGVtZW50OiBhbnkgPSBudWxsO1xyXG5cclxuICBzZXQoZHJhZ2dlZEVsZW1lbnQ6IGFueSkge1xyXG4gICAgdGhpcy5fZHJhZ2dlZEVsZW1lbnQgPSBkcmFnZ2VkRWxlbWVudDtcclxuICB9XHJcblxyXG4gIGdldCgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RyYWdnZWRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgaXNEcmFnZ2luZygpIHtcclxuICAgIHJldHVybiAhIXRoaXMuZ2V0KCk7XHJcbiAgfVxyXG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xuXTtcbn1cclxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=