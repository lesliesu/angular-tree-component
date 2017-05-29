// element-closest | CC0-1.0 | github.com/jonathantneal/closest
if (typeof Element.prototype.matches !== 'function') {
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
        Element.prototype['mozMatchesSelector'] ||
        Element.prototype.webkitMatchesSelector ||
        function matches(selector) {
            var element = this;
            var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
            var index = 0;
            while (elements[index] && elements[index] !== element) {
                ++index;
            }
            return Boolean(elements[index]);
        };
}
if (typeof Element.prototype['closest'] !== 'function') {
    Element.prototype['closest'] = function closest(selector) {
        var element = this;
        while (element && element.nodeType === 1) {
            if (element.matches(selector)) {
                return element;
            }
            element = element.parentNode;
        }
        return null;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi92ZW5kb3IvY2xvc2VzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrREFBK0Q7QUFFL0QsRUFBRSxDQUFDLENBQUMsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3BELE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsaUJBQWlCO1FBQzdELE9BQU8sQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUM7UUFDdkMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUI7UUFDdkMsaUJBQWlCLFFBQVE7WUFDekIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksUUFBUSxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEYsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBRWQsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLE9BQU8sRUFBRSxDQUFDO2dCQUN0RCxFQUFFLEtBQUssQ0FBQztZQUNWLENBQUM7WUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztJQUN2RCxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLGlCQUFpQixRQUFRO1FBQ3RELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztRQUVuQixPQUFPLE9BQU8sSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3pDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ2pCLENBQUM7WUFFRCxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUMvQixDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUMsQ0FBQztBQUNKLENBQUMiLCJmaWxlIjoiY2xvc2VzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlbGVtZW50LWNsb3Nlc3QgfCBDQzAtMS4wIHwgZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL2Nsb3Nlc3RcclxuXHJcbmlmICh0eXBlb2YgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fFxyXG4gICAgRWxlbWVudC5wcm90b3R5cGVbJ21vek1hdGNoZXNTZWxlY3RvciddIHx8XHJcbiAgICBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcclxuICAgIGZ1bmN0aW9uIG1hdGNoZXMoc2VsZWN0b3IpIHtcclxuICAgIGxldCBlbGVtZW50ID0gdGhpcztcclxuICAgIGxldCBlbGVtZW50cyA9IChlbGVtZW50LmRvY3VtZW50IHx8IGVsZW1lbnQub3duZXJEb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG5cclxuICAgIHdoaWxlIChlbGVtZW50c1tpbmRleF0gJiYgZWxlbWVudHNbaW5kZXhdICE9PSBlbGVtZW50KSB7XHJcbiAgICAgICsraW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEJvb2xlYW4oZWxlbWVudHNbaW5kZXhdKTtcclxuICB9O1xyXG59XHJcblxyXG5pZiAodHlwZW9mIEVsZW1lbnQucHJvdG90eXBlWydjbG9zZXN0J10gIT09ICdmdW5jdGlvbicpIHtcclxuICBFbGVtZW50LnByb3RvdHlwZVsnY2xvc2VzdCddID0gZnVuY3Rpb24gY2xvc2VzdChzZWxlY3Rvcikge1xyXG4gICAgbGV0IGVsZW1lbnQgPSB0aGlzO1xyXG5cclxuICAgIHdoaWxlIChlbGVtZW50ICYmIGVsZW1lbnQubm9kZVR5cGUgPT09IDEpIHtcclxuICAgICAgaWYgKGVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9O1xyXG59XHJcbiJdfQ==