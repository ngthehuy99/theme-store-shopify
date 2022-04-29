var GLOBO = GLOBO || {};
(function($) {
  GLOBO.slideshow = {
    init: function() {

      $('.owl-carousel').owlCarousel({
        loop:false,
        margin:15,
        nav:true,
        navText:["<i class='btn-nav fas fa-angle-left'></i>","<i class='btn-nav fas fa-angle-right'></i>"],
        dots:false,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:2
          },
          1000:{
            items:3
          }
        }
      });
      
    }
  }
})(jQuery);
  
jQuery(document)
  .on('shopify:section:load', GLOBO.slideshow.init)
  .on('shopify:section:unload', GLOBO.slideshow.init)
  .on('shopify:section:select', GLOBO.slideshow.init)
  .on('shopify:section:deselect', GLOBO.slideshow.init)
  .on('shopify:block:select', GLOBO.slideshow.init)
  .on('shopify:block:deselect', GLOBO.slideshow.init);
// window.theme = window.theme || {};

// theme.Sections = function Sections() {
//   this.constructors = {};
//   this.instances = [];

//   $(document)
//     .on('shopify:section:load', this._onSectionLoad.bind(this))
//     .on('shopify:section:unload', this._onSectionLoad.bind(this))
//     .on('shopify:section:select', this._onSectionLoad.bind(this))
//     .on('shopify:section:deselect', this._onSectionLoad.bind(this))
//     .on('shopify:block:select', this._onSectionLoad.bind(this))
//     .on('shopify:block:deselect', this._onSectionLoad.bind(this));
// };

// theme.Sections.prototype = _.assignIn({}, theme.Sections.prototype, {
//   _createInstance: function(container, constructor) {
//     var $container = $(container);
//     var id = $container.attr('data-section-id');
//     var type = $container.attr('data-section-type');

//     constructor = constructor || this.constructors[type];

//     if (_.isUndefined(constructor)) {
//       return;
//     }

//     var instance = _.assignIn(new constructor(container), {
//       id: id,
//       type: type,
//       container: container
//     });

//     this.instances.push(instance);
//   },

//   _onSectionLoad: function(evt) {
//     $('.owl-carousel').owlCarousel({
//         loop:false,
//         margin:15,
//         nav:true,
//         navText:["<i class='btn-nav fas fa-angle-left'></i>","<i class='btn-nav fas fa-angle-right'></i>"],
//         dots:false,
//         responsive:{
//           0:{
//             items:1
//           },
//           600:{
//             items:2
//           },
//           1000:{
//             items:3
//           }
//         }
//       });
//   },

//   _onSectionUnload: function(evt) {
//     this.instances = _.filter(this.instances, function(instance) {
//       var isEventInstance = instance.id === evt.originalEvent.detail.sectionId;

//       if (isEventInstance) {
//         if (_.isFunction(instance.onUnload)) {
//           instance.onUnload(evt);
//         }
//       }

//       return !isEventInstance;
//     });
//   },

//   _onSelect: function(evt) {
//     // eslint-disable-next-line no-shadow
//     var instance = _.find(this.instances, function(instance) {
//       return instance.id === evt.originalEvent.detail.sectionId;
//     });

//     if (!_.isUndefined(instance) && _.isFunction(instance.onSelect)) {
//       instance.onSelect(evt);
//     }
//   },

//   _onDeselect: function(evt) {
//     // eslint-disable-next-line no-shadow
//     var instance = _.find(this.instances, function(instance) {
//       return instance.id === evt.originalEvent.detail.sectionId;
//     });

//     if (!_.isUndefined(instance) && _.isFunction(instance.onDeselect)) {
//       instance.onDeselect(evt);
//     }
//   },

//   _onBlockSelect: function(evt) {
//     // eslint-disable-next-line no-shadow
//     var instance = _.find(this.instances, function(instance) {
//       return instance.id === evt.originalEvent.detail.sectionId;
//     });

//     if (!_.isUndefined(instance) && _.isFunction(instance.onBlockSelect)) {
//       instance.onBlockSelect(evt);
//     }
//   },

//   _onBlockDeselect: function(evt) {
//     // eslint-disable-next-line no-shadow
//     var instance = _.find(this.instances, function(instance) {
//       return instance.id === evt.originalEvent.detail.sectionId;
//     });

//     if (!_.isUndefined(instance) && _.isFunction(instance.onBlockDeselect)) {
//       instance.onBlockDeselect(evt);
//     }
//   },

//   register: function(type, constructor) {
//     this.constructors[type] = constructor;

//     $('[data-section-type=' + type + ']').each(
//       function(index, container) {
//         this._createInstance(container, constructor);
//       }.bind(this)
//     );
//   }
// });