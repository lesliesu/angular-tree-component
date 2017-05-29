import { Directive, Input, Renderer, TemplateRef, ViewContainerRef } from '@angular/core';
var EASE_ACCELERATION = 1.005;
var TreeAnimateOpenDirective = (function () {
    function TreeAnimateOpenDirective(renderer, templateRef, viewContainerRef) {
        this.renderer = renderer;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(TreeAnimateOpenDirective.prototype, "isOpen", {
        set: function (value) {
            if (value) {
                this._show();
                if (this.isEnabled && this._isOpen === false) {
                    this._animateOpen();
                }
            }
            else {
                this.isEnabled ? this._animateClose() : this._hide();
            }
            this._isOpen = !!value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    TreeAnimateOpenDirective.prototype._show = function () {
        if (this.innerElement)
            return;
        // create child view
        this.innerElement = this.viewContainerRef.createEmbeddedView(this.templateRef).rootNodes[0];
    };
    TreeAnimateOpenDirective.prototype._hide = function () {
        this.viewContainerRef.clear();
        this.innerElement = null;
    };
    TreeAnimateOpenDirective.prototype._animateOpen = function () {
        var _this = this;
        var delta = this.animateSpeed;
        var ease = this.animateAcceleration;
        var maxHeight = 0;
        // set height to 0
        this.renderer.setElementStyle(this.innerElement, 'max-height', "0");
        // increase maxHeight until height doesn't change
        setTimeout(function () {
            var i = setInterval(function () {
                if (!_this._isOpen || !_this.innerElement)
                    return clearInterval(i);
                maxHeight += delta;
                var roundedMaxHeight = Math.round(maxHeight);
                _this.renderer.setElementStyle(_this.innerElement, 'max-height', roundedMaxHeight + "px");
                var height = _this.innerElement.getBoundingClientRect().height; // TBD use renderer
                delta *= ease;
                ease *= EASE_ACCELERATION;
                if (height < roundedMaxHeight) {
                    // Make maxHeight auto because animation finished and container might change height later on
                    _this.renderer.setElementStyle(_this.innerElement, 'max-height', null);
                    clearInterval(i);
                }
            }, 17);
        });
    };
    TreeAnimateOpenDirective.prototype._animateClose = function () {
        var _this = this;
        if (!this.innerElement)
            return;
        var delta = this.animateSpeed;
        var ease = this.animateAcceleration;
        var height = this.innerElement.getBoundingClientRect().height; // TBD use renderer
        // slowly decrease maxHeight to 0, starting from current height
        var i = setInterval(function () {
            if (_this._isOpen || !_this.innerElement)
                return clearInterval(i);
            height -= delta;
            _this.renderer.setElementStyle(_this.innerElement, 'max-height', height + "px");
            delta *= ease;
            ease *= EASE_ACCELERATION;
            if (height <= 0) {
                // after animation complete - remove child element
                _this.viewContainerRef.clear();
                _this.innerElement = null;
                clearInterval(i);
            }
        }, 17);
    };
    return TreeAnimateOpenDirective;
}());
export { TreeAnimateOpenDirective };
TreeAnimateOpenDirective.decorators = [
    { type: Directive, args: [{
                selector: '[treeAnimateOpen]'
            },] },
];
/** @nocollapse */
TreeAnimateOpenDirective.ctorParameters = function () { return [
    { type: Renderer, },
    { type: TemplateRef, },
    { type: ViewContainerRef, },
]; };
TreeAnimateOpenDirective.propDecorators = {
    'animateSpeed': [{ type: Input, args: ['treeAnimateOpenSpeed',] },],
    'animateAcceleration': [{ type: Input, args: ['treeAnimateOpenAcceleration',] },],
    'isEnabled': [{ type: Input, args: ['treeAnimateOpenEnabled',] },],
    'isOpen': [{ type: Input, args: ['treeAnimateOpen',] },],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9kaXJlY3RpdmVzL3RyZWUtYW5pbWF0ZS1vcGVuLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUEsRUFBcUIsUUFBQSxFQUN2QixXQUFBLEVBQWEsZ0JBQUEsRUFDdkIsTUFBTSxlQUFBLENBQWdCO0FBRXZCLElBQU0saUJBQUEsR0FBb0IsS0FBQSxDQUFNO0FBR2hDO0lBc0JFLGtDQUNVLFFBQWtCLEVBQ2xCLFdBQTZCLEVBQzdCLGdCQUFrQztRQUZsQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUcsQ0FBQztJQWpCaEQsc0JBQUksNENBQU07YUFBVixVQUFXLEtBQWM7WUFDdkIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDVixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQzdDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQztZQUNILENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkQsQ0FBQztZQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFTTSx3Q0FBSyxHQUFiO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUU5QixvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJ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bnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsIElucHV0LCBIb3N0TGlzdGVuZXIsIFJlbmRlcmVyLCBFbGVtZW50UmVmLFxyXG4gIERvQ2hlY2ssIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5jb25zdCBFQVNFX0FDQ0VMRVJBVElPTiA9IDEuMDA1O1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlQW5pbWF0ZU9wZW5EaXJlY3RpdmUge1xyXG4gIHByaXZhdGUgX2lzT3BlbjogYm9vbGVhbjtcclxuXHJcbiAgIGFuaW1hdGVTcGVlZDogbnVtYmVyO1xyXG4gICBhbmltYXRlQWNjZWxlcmF0aW9uOiBudW1iZXI7XHJcbiAgIGlzRW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgXHJcbiAgc2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX3Nob3coKTtcclxuICAgICAgaWYgKHRoaXMuaXNFbmFibGVkICYmIHRoaXMuX2lzT3BlbiA9PT0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLl9hbmltYXRlT3BlbigpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzRW5hYmxlZCA/IHRoaXMuX2FuaW1hdGVDbG9zZSgpIDogdGhpcy5faGlkZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5faXNPcGVuID0gISF2YWx1ZTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGlubmVyRWxlbWVudDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLFxyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge31cclxuXHJcbiAgcHJpdmF0ZSBfc2hvdygpIHtcclxuICAgIGlmICh0aGlzLmlubmVyRWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBjaGlsZCB2aWV3XHJcbiAgICB0aGlzLmlubmVyRWxlbWVudCA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZikucm9vdE5vZGVzWzBdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaGlkZSgpIHtcclxuICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xyXG4gICAgdGhpcy5pbm5lckVsZW1lbnQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYW5pbWF0ZU9wZW4oKSB7XHJcbiAgICBsZXQgZGVsdGEgPSB0aGlzLmFuaW1hdGVTcGVlZDtcclxuICAgIGxldCBlYXNlID0gdGhpcy5hbmltYXRlQWNjZWxlcmF0aW9uO1xyXG4gICAgbGV0IG1heEhlaWdodCA9IDA7XHJcblxyXG4gICAgLy8gc2V0IGhlaWdodCB0byAwXHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLmlubmVyRWxlbWVudCwgJ21heC1oZWlnaHQnLCBgMGApO1xyXG5cclxuICAgIC8vIGluY3JlYXNlIG1heEhlaWdodCB1bnRpbCBoZWlnaHQgZG9lc24ndCBjaGFuZ2VcclxuICAgIHNldFRpbWVvdXQoKCkgPT4geyAvLyBBbGxvdyBpbm5lciBlbGVtZW50IHRvIGNyZWF0ZSBpdHMgY29udGVudFxyXG4gICAgICBjb25zdCBpID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNPcGVuIHx8ICF0aGlzLmlubmVyRWxlbWVudCkgcmV0dXJuIGNsZWFySW50ZXJ2YWwoaSk7XHJcblxyXG4gICAgICAgIG1heEhlaWdodCArPSBkZWx0YTtcclxuICAgICAgICBjb25zdCByb3VuZGVkTWF4SGVpZ2h0ID0gTWF0aC5yb3VuZChtYXhIZWlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLmlubmVyRWxlbWVudCwgJ21heC1oZWlnaHQnLCBgJHtyb3VuZGVkTWF4SGVpZ2h0fXB4YCk7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5pbm5lckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0OyAvLyBUQkQgdXNlIHJlbmRlcmVyXHJcblxyXG4gICAgICAgIGRlbHRhICo9IGVhc2U7XHJcbiAgICAgICAgZWFzZSAqPSBFQVNFX0FDQ0VMRVJBVElPTjtcclxuICAgICAgICBpZiAoaGVpZ2h0IDwgcm91bmRlZE1heEhlaWdodCkge1xyXG4gICAgICAgICAgLy8gTWFrZSBtYXhIZWlnaHQgYXV0byBiZWNhdXNlIGFuaW1hdGlvbiBmaW5pc2hlZCBhbmQgY29udGFpbmVyIG1pZ2h0IGNoYW5nZSBoZWlnaHQgbGF0ZXIgb25cclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuaW5uZXJFbGVtZW50LCAnbWF4LWhlaWdodCcsIG51bGwpO1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDE3KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYW5pbWF0ZUNsb3NlKCkge1xyXG4gICAgaWYgKCF0aGlzLmlubmVyRWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBkZWx0YSA9IHRoaXMuYW5pbWF0ZVNwZWVkO1xyXG4gICAgbGV0IGVhc2UgPSB0aGlzLmFuaW1hdGVBY2NlbGVyYXRpb247XHJcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5pbm5lckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0OyAvLyBUQkQgdXNlIHJlbmRlcmVyXHJcblxyXG4gICAgLy8gc2xvd2x5IGRlY3JlYXNlIG1heEhlaWdodCB0byAwLCBzdGFydGluZyBmcm9tIGN1cnJlbnQgaGVpZ2h0XHJcbiAgICBjb25zdCBpID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5faXNPcGVuIHx8ICF0aGlzLmlubmVyRWxlbWVudCkgcmV0dXJuIGNsZWFySW50ZXJ2YWwoaSk7XHJcblxyXG4gICAgICBoZWlnaHQgLT0gZGVsdGE7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuaW5uZXJFbGVtZW50LCAnbWF4LWhlaWdodCcsIGAke2hlaWdodH1weGApO1xyXG4gICAgICBkZWx0YSAqPSBlYXNlO1xyXG4gICAgICBlYXNlICo9IEVBU0VfQUNDRUxFUkFUSU9OO1xyXG5cclxuICAgICAgaWYgKGhlaWdodCA8PSAwKSB7XHJcbiAgICAgICAgLy8gYWZ0ZXIgYW5pbWF0aW9uIGNvbXBsZXRlIC0gcmVtb3ZlIGNoaWxkIGVsZW1lbnRcclxuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmlubmVyRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpKTtcclxuICAgICAgfVxyXG4gICAgfSwgMTcpO1xyXG4gIH1cclxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xyXG4gIHNlbGVjdG9yOiAnW3RyZWVBbmltYXRlT3Blbl0nXHJcbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogUmVuZGVyZXIsIH0sXG57dHlwZTogVGVtcGxhdGVSZWYsIH0sXG57dHlwZTogVmlld0NvbnRhaW5lclJlZiwgfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ2FuaW1hdGVTcGVlZCc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ3RyZWVBbmltYXRlT3BlblNwZWVkJywgXSB9LF0sXG4nYW5pbWF0ZUFjY2VsZXJhdGlvbic6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ3RyZWVBbmltYXRlT3BlbkFjY2VsZXJhdGlvbicsIF0gfSxdLFxuJ2lzRW5hYmxlZCc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ3RyZWVBbmltYXRlT3BlbkVuYWJsZWQnLCBdIH0sXSxcbidpc09wZW4nOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWyd0cmVlQW5pbWF0ZU9wZW4nLCBdIH0sXSxcbn07XG59XHJcblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19